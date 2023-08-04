const CategoriesModel = require('../model/Categories.model');

// Get All Categories
const getAllCategories = async (req, res) => {
    try {
        const allCategories = await CategoriesModel.find();
        res.status(200).json({
            status: "Success",
            TotalResults: allCategories.length,
            data: allCategories,
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            error: error.message,
        })
    }
}

//Get Specific Categories 
const getSpecificCategory = async (req, res) => {
    try {
        const categories = await CategoriesModel.findById(req.params.id);
        res.status(200).json({
            status: "Success",
            TotalResults: categories.length,
            data: categories,
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            error: error.message,
        })
    }
}

// Get Specific Category With Products
// const getSpecificCategoryProducts = async (req, res) => {
//     try {
//         const id = req.params.categoryId;
//         console.log(id);

//         const products = await ProductModel.find();
//         res.status(200).json({
//             status: "Success",
//             TotalResults: products.length,
//             data: products,
//         });
//     } catch (error) {
//         res.status(400).json({
//             status: "Failed",
//             error: error.message,
//         });
//     }
// };

//Add the Categories 
const addCategories = async (req, res) => {
    try {
        const newAddCategories = new CategoriesModel(req.body);
        await newAddCategories.save();
        res.status(201).json({
            status: "Success",
            data: newAddCategories,
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            error: error.message,
        })
    }
}

module.exports = { getAllCategories, addCategories, getSpecificCategory }