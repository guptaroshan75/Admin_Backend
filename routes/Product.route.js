const express = require('express');
const router = express.Router();
const {
    getAllProducts, addProducts, getSpecificCategoryProducts, deleteProduct, updateProduct
} = require('../controllers/Product.controller');

router.get('/getAllProducts', getAllProducts);

// router.post('/addProducts/:id', addProducts);
router.post('/addProducts', addProducts);

router.get('/getSpecificCategoryProducts/:id', getSpecificCategoryProducts);

router.put('/updateProduct/:id', updateProduct);

router.delete('/deleteProduct/:id', deleteProduct);

module.exports = router;