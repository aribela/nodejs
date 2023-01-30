const express = require('express');

const {UsersController} = require('./controller');

const router = express.Router();

module.exports.UsersAPI = (app) => {
    router
        .get('/', UsersController.getUsers)
        
        .get('/:id', UsersController.getUser)
        .post('/', UsersController.createUser)
        //update
        //delete
        //buscar en mongodb.com -> drives -> nodejs -> usage examples
    app.use('/api/users', router);
}