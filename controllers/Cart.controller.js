const CartModel = require('../model/Cart.model');
const ProductModel = require('../model/Product.model');

const getAddToProduct = async (req, res) => {
    try {
        const getAllAddProducts = await CartModel.find();
        res.status(201).json({
            status: 'Success',
            data: getAllAddProducts,
        })
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            error: error.message
        })
    }
}

const addToCart = async (req, res) => {
    try {
        const { _id } = await ProductModel.findById(req.params.id);
        const { quantity, amount, totalAmount } = req.body;
        
        const data = await CartModel.create({
            product_id: _id,
            quantity: quantity,
            amount: amount,
            totalAmount: totalAmount
        });
        res.status(200).json({
            status: 'Success',
            data: data,
        })
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            error: error.message,
        })
    }
}

// const addToCart = async (req, res) => {
//     const { quantity, amount, totalAmount } = req.body;
//     const product_id = req.params.id; //TODO: the logged in user id

//     try {
//         let cart = await ProductModel.findOne({ product_id });

//         if (cart) {
//             cart.ProductModel.findIndex(p => p.productId == productId);

//             if (itemIndex > -1) {
//                 //product exists in the cart, update the quantity
//                 let productItem = cart.ProductModel[itemIndex];
//                 productItem.quantity = quantity;
//                 cart.products[itemIndex] = productItem;
//             } else {
//                 //product does not exists in cart, add new item
//                 cart.CartModel.push({ productId, quantity, amount, totalAmount });
//             }
//             cart = await CartModel.save();
//             return res.status(201).send(CartModel);
//         } else {
//             const newCart = await CartModel.create({
//                 product_id,
//                 addProducts: [{ quantity, amount, totalAmount }]
//             });

//             return res.status(201).send(newCart);
//         }
//     } catch (err) {
//         console.log(err);
//         res.status(500).send("Something went wrong");
//     }
// };

module.exports = { addToCart, getAddToProduct }