
const createError = require('http-errors');
const debug = require('debug')('app:module-users-controller');
const {UsersService} = require('./services');
const {Response} = require('../common/response');

module.exports.UsersController = {
    getUsers: async(req, res) => {
        try{
            let users = await UsersService.getAll();
            // res.json(users);
            Response.success(res, 200, "Lista de usuarios", users);
        }catch(error){
            debug(error);
            // res.status(500).json({message: error.message});
            Response.error(res)
        }
    },
    getUser: async(req, res) => {
        try{
            const {params: {id}} = req;
            let user = await UsersService.getById(id);
            if(!user){
                Response.error(res, new createError.NotFound());
            }else{
                // res.json(product);
                Response.success(res, 200, `Usuario ${id}`, user);
            }
        }catch(error){
            debug(error);
            // res.status(500).json({message: error.message});
            Response.error(res)
        }
    },
    createUser: async(req, res) => {
        try{
            const {body} = req;
            let insertedId = await UsersService.create(body);
            if(!body || Object.keys(body).length === 0) {
                Response.error(res, new createError.BadRequest());
            }else{
                // res.json(insertedId);
                Response.success(res, 201, `Usuario agregado`, insertedId);
            }

        }catch(error){
            debug(error);
            // res.status(500).json({message: error.message});
            Response.error(res)
        }
    },
    //update
    //delete
    
}