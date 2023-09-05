const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const bookModel = require('../models/bookModel');
const cartModel = require('../models/cartModel');

exports.getCart = catchAsync(async (req, res, next) => {
    const { email } = req.user;

    const cartResult = await cartModel.getCartByEmail(email);
    const {
        CART_ID: cartId,
        CART_COUNT: cartCount,
        CART_TOTAL: cartTotal,
    } = cartResult;

    const books = await bookModel.getBooksByCartId(cartId);

    res.status(200).json({
        status: 'success',
        cart: {
            cartId,
            cartCount,
            cartTotal,
            books,
        },
    });
});

exports.addBookToCart = catchAsync(async (req, res, next) => {
    const { email } = req.user;
    const { bookId, quantity, isClicked } = req.body;

    const cartResult = await cartModel.getCartByEmail(email);
    const { CART_ID: cartId } = cartResult;

    const book = await bookModel.getBookById(bookId);
    if (!book) {
        return next(new AppError('Book not found.', 400));
    }

    const books = await bookModel.getBooksByCartId(cartId);

    if (books) {
        const matchBook = books.find((item) => item.bookId === bookId);
        if (matchBook) {
            const returnValue = await cartModel.updateBookInCart({
                cartId,
                bookId,
                quantity: +quantity + matchBook.quantity,
                isClicked,
            });
            if (returnValue !== 1) {
                await cartModel.deleteFromCart(cartId, bookId);
                await cartModel.updateCartQuantityCartTotal(cartId);
                return next(
                    new AppError(`This book is no longer existed.`, 400),
                );
            }
            await cartModel.updateCartQuantityCartTotal(cartId);
            return res.status(200).json({
                status: 'success',
                message: 'Update successfully.',
            });
        }
    }

    const returnValue = await cartModel.addBookToCart({
        cartId,
        bookId,
        quantity,
        isClicked: isClicked || 0,
    });
    if (returnValue !== 1) {
        return next(new AppError(`This book is no longer existed.`, 400));
    }

    await cartModel.updateCartQuantityCartTotal(cartId);
    res.status(200).json({
        status: 'success',
    });
});

exports.updateBookInCart = catchAsync(async (req, res, next) => {
    const { email } = req.user;
    const { bookId } = req.params;
    const { quantity, isClicked } = req.body;

    const cartResult = await cartModel.getCartByEmail(email);
    const { CART_ID: cartId } = cartResult;

    const result = await cartModel.updateBookInCart({
        cartId,
        bookId,
        quantity,
        isClicked,
    });

    if (result === 1) {
        await cartModel.updateCartQuantityCartTotal(cartId);
        return res.status(200).json({
            status: 'success',
        });
    }
    await cartModel.deleteFromCart(cartId, bookId);
    await cartModel.updateCartQuantityCartTotal(cartId);
    return next(new AppError(`This book is no longer existed.`, 400));
});

exports.deleteBookFromCart = catchAsync(async (req, res, next) => {
    const { email } = req.user;
    const { bookId } = req.params;

    const cartResult = await cartModel.getCartByEmail(email);
    const { CART_ID: cartId } = cartResult;

    const result = await cartModel.deleteFromCart(cartId, bookId);
    await cartModel.updateCartQuantityCartTotal(cartId);

    if (result) {
        res.status(200).json({
            status: 'success',
        });
    } else {
        return next(new AppError('Book not found.', 400));
    }
});
