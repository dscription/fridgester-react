const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const fridgeItemSchema = new Schema({
  name: {type: String, required: true},
  expiration: Date,
  isPerishable: Boolean,
  isExpired: Boolean,
  image: String,
  dateAdded: Date,
  dateRemoved: Date,
})


module.exports = mongoose.model('FridgeItem', fridgeItemSchema);