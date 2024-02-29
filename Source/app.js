const express = require('express');
const app = express();
const productRouter = require('./Routes/products.route');
const cartRouter = require('../Routes/carts.route');
const multer = require('./utils');

//Luego pasar a .env
const port = 8080;

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.use('/api/products', productRouter);
app.use('/api/carts', cartRouter);

//Listen
app.listen(port, () => {
    console.log(`Server running on port ${8080}`);
});