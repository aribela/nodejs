const express = require('express');
const debug = require('debug')('app:main');

const {Config} = require('./src/config/index.js');
const {ProductsAPI} = require('./src/products/index');
const {UsersAPI} = require('./src/users/index');
const {IndexAPI, NotFoundAPI} = require('./src/index/index')

const app = express();

app.use(express.json());

//modulos
IndexAPI(app);
ProductsAPI(app);
UsersAPI(app);
NotFoundAPI(app);

app.listen(Config.port, () => {
    debug(`listening on port ${Config.port}`);
})