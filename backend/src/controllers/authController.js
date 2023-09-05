const { promisify } = require('util');
const jwt = require('jsonwebtoken');

const accountModel = require('../models/accountModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const config = require('../config');
const {
    verifyPassword,
    encryptPassword,
    generateToken,
} = require('../utils/crypto');
const oauth2Client = require('../utils/oauth2');
const { getVerifyEmail, createTransport } = require('../utils/nodemailer');

exports.signUp = catchAsync(async (req, res, next) => {
    const { email, phoneNumber, password, fullName } = req.body;

    // Check for email duplicated
    const emailAccount = await accountModel.getByEmail(email);
    if (emailAccount) {
        return next(new AppError('Email already exists.', 400));
    }

    // Check for phone number duplicated
    const phoneNumberAccount = await accountModel.getByPhone(phoneNumber);
    if (phoneNumberAccount) {
        return next(new AppError('Phone number is already used.', 400));
    }

    // 256 bits which provides about 1e+77 possible different number
    // This is enough for preventing brute force
    const verifyToken = generateToken(config.NUMBER_BYTE_VERIFY_TOKEN);

    // Encrypt password by salting and hashing
    const encryptedPassword = encryptPassword(password);

    // Send each mail with different time to prevent the html being trimmed by Gmail
    const url = `${req.protocol}://${req.get('host')}/api/users`;
    const mailOption = getVerifyEmail(email, url, verifyToken);
    await createTransport().sendMail(mailOption);

    // Create entity to insert to DB
    const entity = {
        email,
        phoneNumber,
        fullName,
        password: encryptedPassword,
        verified: 1,
        token: verifyToken,
        role: config.role.USER,
    };
    await accountModel.createAccount(entity);

    res.status(200).json({
        status: 'success',
        message: 'Create account successfully',
    });
});

exports.verify = catchAsync(async (req, res, next) => {
    const { token } = req.params;

    const result = await accountModel.verifyAccount(token);
    if (result > 0) {
        res.status(200).json({
            status: 'success',
            message: 'Verify successfully.',
        });
    } else {
        return next(new AppError('Verification code is not found.', 400));
    }
});

const signToken = (email) => {
    return jwt.sign({ email }, config.JWT_SECRET, {
        expiresIn: config.JWT_EXPIRES_IN,
    });
};

const createSendToken = (user, statusCode, req, res) => {
    const token = signToken(user.email);

    res.cookie('jwt', token, {
        expires: new Date(
            Date.now() + config.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000,
        ),
        httpOnly: true,
        // secure: req.secure || req.headers('x-forwarded-proto') === 'https',
    });

    res.status(statusCode).json({
        status: 'success',
        token,
        user,
    });
};

exports.login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    // Check if email and password exist
    if (!email || !password) {
        return next(
            new AppError('Please provide both email and password!', 400),
        );
    }

    // Check for correct email
    const account = await accountModel.getByEmail(email);
    if (!account) {
        return next(new AppError('Email or password is not correct.', 400));
    }

    // Get the database password
    const encryptedPassword = account.ENC_PWD;
    if (!encryptedPassword) {
        return next(new AppError('Email or password is not correct.', 400));
    }

    // Check the correctness of password
    if (!verifyPassword(password, encryptedPassword)) {
        return next(new AppError('Email or password is not correct.', 400));
    }

    // Handle account not verified
    const verified = account.VERIFIED;
    if (!verified) {
        return next(new AppError('Account is not verified.', 400));
    }

    const returnAccount = {
        email: account.EMAIL,
        phoneNumber: account.PHONE_NUMBER,
        fullName: account.FULLNAME,
        avatar: account.AVATAR_PATH,
        verified,
    };

    // Send back response with token
    createSendToken(returnAccount, 200, req, res);
});

exports.loginGoogle = catchAsync(async (req, res, next) => {
    // Extract and verify token from Google
    const { tokenId } = req.body;
    const result = await oauth2Client.verifyIdToken({
        idToken: tokenId,
        audience: config.GOOGLE_CLIENT_ID,
    });

    // Create new account if email is not registered
    const { email } = result.payload;
    const currentAccount = await accountModel.getByEmail(email);
    if (!currentAccount) {
        const newAccount = {
            email: email,
            verified: 1,
            role: config.role.USER,
        };
        await accountModel.createAccount(newAccount);
    }

    // Sign a new token by server
    const returnAccount = {
        email,
    };
    createSendToken(returnAccount, 200, req, res);
});

exports.protect = catchAsync(async (req, res, next) => {
    let token;

    // 1) Get token and check if it's there
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies.jwt) {
        token = req.cookies.jwt;
    }

    if (!token) {
        return next(
            new AppError(
                'You are not logged in! Please log in to get access.',
                401,
            ),
        );
    }

    // 2) Verification token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // 3) Check if user still exists
    let currentUser = await accountModel.getByEmail(decoded.email);
    if (!currentUser) {
        return next(
            new AppError(
                'The user belonging this token does no longer exist!',
                401,
            ),
        );
    }

    currentUser = {
        email: currentUser.EMAIL,
        fullName: currentUser.FULLNAME,
        phoneNumber: currentUser.PHONE_NUMBER,
        password: currentUser.ENC_PWD,
        avatarPath: currentUser.AVATAR_PATH,
        avatarFilename: currentUser.AVATAR_FILENAME,
        passwordChangedAt: currentUser.PASSWORDCHANGEDAT,
        role: currentUser.HROLE,
    };

    // 4) Check if user changes password after the JWT was issued
    let check = false;
    const { passwordChangedAt } = currentUser;

    if (passwordChangedAt) {
        const changedTimestamp =
            parseInt(passwordChangedAt.getTime() / 1000, 10) - 7 * 60 * 60; // Change to Hanoi timezone
        check = changedTimestamp > decoded.iat;
    }
    if (check) {
        return next(
            new AppError(
                'User recently changed password! Please log in again.',
                401,
            ),
        );
    }

    // GRANT ACCESS TO PROTECTED ROUTE
    req.user = currentUser;
    next();
});

exports.updatePassword = catchAsync(async (req, res, next) => {
    // 1) Get user from collection
    const { user } = req;

    // 2) Check if POSTed current password is correct
    if (!verifyPassword(req.body.currentPassword, user.password)) {
        return next(new AppError('Your current password is wrong!', 401));
    }

    // 3) If so, update the password
    const password = encryptPassword(req.body.password);
    const userEntity = {
        email: user.email,
        password,
    };
    await accountModel.updateAccount(userEntity);

    // 4) Log user in, send JWT
    createSendToken(user, 200, req, res);
});

exports.logOut = (req, res) => {
    res.cookie('jwt', 'logged-out', {
        expires: new Date(Date.now() + 10 * 1000),
        httpOnly: true,
    });
    res.status(200).json({
        status: 'success',
        token: '',
    });
};

exports.restrictTo = (...roles) => {
    return (req, res, next) => {
        // roles ['admin', 'lead-guide']
        if (!roles.includes(req.user.role)) {
            return next(
                new AppError(
                    'You do not have permission to perform this action!',
                    403,
                ),
            );
        }
        next();
    };
};
