const express = require('express');

const {ProductsController} = require('./controller');

const router = express.Router();

module.exports.ProductsAPI = (app) => {
    router
        .get('/', ProductsController.getProducts)
        .get('/report', ProductsController.generateReport)
        .get('/:id', ProductsController.getProduct)
        .post('/', ProductsController.createProduct)
        //update
        //delete
        //buscar en mongodb.com -> drives -> nodejs -> usage examples
    app.use('/api/products', router);
}