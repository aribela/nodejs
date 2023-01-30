
const createError = require('http-errors');
const debug = require('debug')('app:module-products-controller');
const {ProductsService} = require('./services');
const {Response} = require('../common/response');

module.exports.ProductsController = {
    getProducts: async(req, res) => {
        try{
            let products = await ProductsService.getAll();
            // res.json(products);
            Response.success(res, 200, "Lista de poductos", products);
        }catch(error){
            debug(error);
            // res.status(500).json({message: error.message});
            Response.error(res)
        }
    },
    getProduct: async(req, res) => {
        try{
            const {params: {id}} = req;
            let product = await ProductsService.getById(id);
            if(!product){
                Response.error(res, new createError.NotFound());
            }else{
                // res.json(product);
                Response.success(res, 200, `Producto ${id}`, product);
            }
        }catch(error){
            debug(error);
            // res.status(500).json({message: error.message});
            Response.error(res)
        }
    },
    createProduct: async(req, res) => {
        try{
            const {body} = req;
            let insertedId = await ProductsService.create(body);
            if(!body || Object.keys(body).length === 0) {
                Response.error(res, new createError.BadRequest());
            }else{
                // res.json(insertedId);
                Response.success(res, 201, `Producto agregado`, insertedId);
            }

        }catch(error){
            debug(error);
            // res.status(500).json({message: error.message});
            Response.error(res)
        }
    },
    //update
    //delete
    generateReport: (req, res) => {
        try{
            ProductsService.generateReport('Inventario', res);
        }catch(error){
            debug(error);
            // res.status(500).json({message: error.message});
            Response.error(res)
        }
    }
}