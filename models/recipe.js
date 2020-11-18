const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: {type: String, required: true},
  originalLink: {type: String, required: true},
  originalIngredients: {type: Array},
  modifiedIngredients: {type: Array, default: []},
  thumbnail: String
})


module.exports = mongoose.model('Recipe', recipeSchema);