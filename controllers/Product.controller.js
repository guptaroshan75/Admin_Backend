const CategoriesModel = require("../model/Categories.model");
const ProductModel = require("../model/Product.model");

// Get All Products
const getAllProducts = async (req, res) => {
    try {
        const allProducts = await ProductModel.find();
        res.status(200).json({
            status: 'Success',
            TotalResults: allProducts.length,
            data: allProducts,
        })
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            error: error.message,
        })
    }
}

//Search Product By Name
const searchProducts = async (req, res) => {
    try {
        const searchProduct = await ProductModel.find({
            "$or": [
                { productName: { $regex: req.params.key } },
            ]
        })
        if (searchProduct.length === 0) {
            return res.status(404).json({
                status: "Not Found",
                message: "Product not found.",
            });
        }
        res.status(201).json({
            status: "Success",
            data: searchProduct,
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            error: error.message,
        })
    }
}

// Get Specific Category With Products
const getSpecificCategoryProducts = async (req, res) => {
    try {
        const { _id } = await CategoriesModel.findById(req.params.id);
        const products = await ProductModel.find({ category: { $in: _id } });
        // const products = await ProductModel.find({ category: { $in: [ '64ab93ceb6dc423b4d85c493' ] } });
        res.status(200).json({
            status: "Success",
            TotalResults: products.length,
            data: products,
        });
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            error: error.message,
        });
    }
};

// Get Specific Products
const getSpecificProducts = async (req, res) => {
    try {
        const { _id } = await ProductModel.findById(req.params.id);
        const products = await ProductModel.find({ _id: _id });
        res.status(200).json({
            data: products,
        });
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            error: error.message,
        });
    }
};

// Add the Products
const addProducts = async (req, res) => {
    try {
        const newAddProducts = new ProductModel(req.body);
        await newAddProducts.save();
        res.status(201).json({
            status: "Success",
            data: newAddProducts,
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            error: error.message,
        })
    }
}

// Update the Product Visivlity
const updateProductVisble = async (req, res) => {
    try {
        const updatedProduct = await ProductModel.updateOne(
            { _id: req.params.productId },
            { $set: { published: !req.body.published } }
        );
        res.status(200).json({
            status: 'Success',
            data: updatedProduct,
        });
    } catch (error) {
        res.status(500).json({
            status: 'Failed',
            error: 'An error occurred while updating the product.',
        });
    }
};

// Update the Product
const updateProduct = (req, res) => {
    ProductModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
        .then(() => {
            res.json({
                msg: "Product Updated Successfully",
            });
        })
        .catch((error) => {
            console.log(error);
            res.json({ error: "Failed to Perform Update Operation" });
        });
};

//Add the Products with category
// const addProducts = async (req, res) => {
//     try {
//         const { _id } = await CategoriesModel.findById(req.params.id);
//         const { name, image, description, price } = req.body;
//         const newAddProducts = await ProductModel.create({
//             category: _id,
//             name: name,
//             image: image,
//             description: description,
//             price: price
//         });
//         res.status(201).json({
//             status: 'Success',
//             data: newAddProducts,
//         })
//     } catch (error) {
//         res.status(400).json({
//             status: "Failed",
//             error: error.message,
//         })
//     }
// }

// Delete the Poducts 
const deleteProduct = async (req, res) => {
    try {
        const product = await ProductModel.findById(req.params.id);

        if (!product) {
            return res.json({
                msg: "Product Not Found",
            });
        } else {
            await ProductModel.findByIdAndDelete(req.params.id);
            return res.json({
                msg: "Product Deleted Successfully",
            });
        }
    } catch (error) {
        return res.status(500).json({
            status: "Failed",
            error: error.message,
        });
    }
}

module.exports = {
    getAllProducts, addProducts, searchProducts, updateProductVisble,
    getSpecificCategoryProducts, deleteProduct, updateProduct, getSpecificProducts
}