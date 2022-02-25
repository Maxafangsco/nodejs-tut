const express = require('express')
const Router = express.Router()
const { getAllProducts,getAllProductsStatic} = require('../controllers/products')

Router.route('/').get(getAllProducts)
Router.route('/static').get(getAllProductsStatic)
//Router.route('/:id').get().update().delete()

module.exports = Router