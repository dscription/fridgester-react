const Recipe = require('../models/recipe');

module.exports = {
  index,
  favorite,
  getOne,
  update,
  delete: deleteRecipe,
};

function index(req, res) {
  console.log('hit index recipes');
  // TODO
}

function favorite(req, res) {
  console.log('hit create recipes');
  // TODO: create the recipe 
}

function getOne(req, res) {
  console.log('hit getOne recipes');
  // TODO
}

function update(req, res) {
  console.log('hit update recipes');
  // TODO
}

function deleteRecipe(req, res) {
  console.log('hit update recipes');
  // TODO
}
