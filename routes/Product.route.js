const express = require('express');
const router = express.Router();
const { searchProducts, deleteProduct, updateProduct,
    getAllProducts, addProducts, getSpecificCategoryProducts,
} = require('../controllers/Product.controller');

router.get('/getAllProducts', getAllProducts);

router.get('/searchProducts/:key', searchProducts);

// router.post('/addProducts/:id', addProducts);
router.post('/addProducts', addProducts);

router.get('/getSpecificCategoryProducts/:id', getSpecificCategoryProducts);

router.put('/updateProduct/:id', updateProduct);

router.delete('/deleteProduct/:id', deleteProduct);

module.exports = router;