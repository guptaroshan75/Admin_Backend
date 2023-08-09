const express = require('express');
const cors = require('cors')
const connectDatabase = require('./config/DBconfig');
const categoriesRouter = require('./routes/Category.route');
const productsRouter = require('./routes/Product.route');
const singleProductRouter = require('./routes/SingleProduct.route');
const addToCartRouter = require('./routes/Cart.route');
const checkOutRouter = require('./routes/Users.route');
const adminRouter = require('./routes/Admin.route');
// const fs = require('fs');
// const path = require('path');


if(process.env.NODE_ENV === 'developement'){
    require('dotenv').config();
}

const app = express();
const PORT = process.env.PORT || 4300;

connectDatabase();

app.set("view engine", "ejs");
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({
        msg: 'Api Created Successfully',
    })
})

app.use('/api', categoriesRouter);
app.use('/api', productsRouter);
app.use('/api', singleProductRouter);
app.use('/api', addToCartRouter);
app.use('/api', checkOutRouter);
app.use('/api', adminRouter);

app.listen(PORT, (error) => {
    if (error) {
       console.log(error); 
    }
    console.log(`Server Running on http://localhost:${PORT}`);
})
