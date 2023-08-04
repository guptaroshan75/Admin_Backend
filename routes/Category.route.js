const express = require('express');
const router = express.Router();
const {
    getAllCategories,
    addCategories,
    getSpecificCategory,
    getSpecificCategoryProducts,
} = require('../controllers/Category.controller')

router.get('/getAllCategories', getAllCategories);

router.get('/category/:id', getSpecificCategory);

router.post('/addCategories', addCategories);

// router.get('/category/:id', getSpecificCategoryP);

module.exports = router;
