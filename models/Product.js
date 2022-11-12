const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  selling_price: String,
  rent_rate: String,
  category: {
    type: String,
  },
  owner: Schema.Types.ObjectId,
  image: {
    type: String
  }
})

const Product = mongoose.model('product', productSchema);

module.exports = Product;
