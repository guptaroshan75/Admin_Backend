const express = require('express');
const router = express.Router();
const { searchProducts, deleteProduct, updateProduct, updateProductVisble,
    getAllProducts, addProducts, getSpecificCategoryProducts, getSpecificProducts
} = require('../controllers/Product.controller');

router.get('/getAllProducts', getAllProducts);

router.get('/searchProducts/:key', searchProducts);

router.get('/getSpecificProducts/:id', getSpecificProducts);

// router.post('/addProducts/:id', addProducts);
router.post('/addProducts', addProducts);

router.get('/getSpecificCategoryProducts/:id', getSpecificCategoryProducts);

router.put('/updateProduct/:id', updateProduct);

router.put('/updateProductVisble/:productId', updateProductVisble);

router.delete('/deleteProduct/:id', deleteProduct);

module.exports = router;