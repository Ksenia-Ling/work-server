const express = require('express');

const productRoutes = express.Router();

const {
  getProducts,
  createProduct
} = require('../controllers/products');

productRoutes.get('/products', getProducts);
productRoutes.post('/products', createProduct);

module.exports = productRoutes;