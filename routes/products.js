const express = require('express');

const productRoutes = express.Router();

const {
  getProducts,
  getRandomProducts,
  createProduct
} = require('../controllers/products');

productRoutes.get('/products', getProducts);
productRoutes.get('/products/:length', getRandomProducts);
productRoutes.post('/products', createProduct);

module.exports = productRoutes;