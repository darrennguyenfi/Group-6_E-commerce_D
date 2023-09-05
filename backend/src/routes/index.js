const express = require('express');

const authController = require('../controllers/authController');
const categoryRouter = require('./categoryRoutes');
const bookRouter = require('./bookRoutes');
const userRouter = require('./userRoutes');
const cartRouter = require('./cartRoutes');
const voucherRouter = require('./voucherRoutes');
const locationRouter = require('./locationRoutes');
const shippingAddressRouter = require('./shippingAddressRoutes');
const checkoutRouter = require('./checkoutRoutes');
const paymentRouter = require('./paymentRoutes');
const orderRouter = require('./orderRoutes');
const reviewRouter = require('./reviewRoutes');

const router = express.Router();

router.use('/api/category', categoryRouter);
router.use('/api/books', bookRouter);
router.use('/api/users', userRouter);
router.use('/api/cart', authController.protect, cartRouter);
router.use('/api/voucher', authController.protect, voucherRouter);
router.use('/api/location', locationRouter);
router.use(
    '/api/shippingAddress',
    authController.protect,
    shippingAddressRouter,
);
router.use('/api/checkout', checkoutRouter);
router.use('/api/payment', paymentRouter);
router.use('/api/order', authController.protect, orderRouter);
router.use('/api/review', reviewRouter);

module.exports = router;
