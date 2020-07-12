const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  cost: { type: Number, required: true },
  quantity: { type: Number, required: true },
}, {
  timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;