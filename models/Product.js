const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  selling_price: String,
  rent_rate: String,
  category: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'

  },
  image: {
    type: String
  }
}, { timestamps: true })

const Product = mongoose.model('product', productSchema);

module.exports = Product;
