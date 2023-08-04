const express = require('express');
const { addToCart, getAddToProduct } = require('../controllers/Cart.controller');
const router = express.Router();

// router.post('/addToCart', addToCart);
router.get('/getAddToProduct', getAddToProduct);
router.post('/addToCart/:id', addToCart);

module.exports = router;