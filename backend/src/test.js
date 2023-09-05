const orderModel = require('./models/orderModel');
const voucher = require('./utils/voucher');
const crypto = require('./utils/crypto');
const config = require('./config');
const axios = require('axios');
const map = require('./utils/map');

const moment = require('moment');

(async () => {
    const abc = {
        a: 1,
        b: 2,
        c: 3,
    };
    const queryString = Object.keys(abc)
        .map((key) => `${key}=${abc[key]}`)
        .join('&');
    console.log(queryString);
})();
