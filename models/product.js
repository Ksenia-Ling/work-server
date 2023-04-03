const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  label: { 
    type: String
  },
  price: {
    type: Number
  }
}); 

module.exports = mongoose.model('product', productSchema);