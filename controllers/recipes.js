const Recipe = require('../models/recipe');
const User = require('../models/user');

module.exports = {
  index,
  favorite,
  getOne,
  update,
  delete: deleteRecipe,
};

function index(req, res) {
  console.log('hit index recipes');
  User.findById(req.user._id)
    .populate('recipes')
    .then((userObj) => {
      console.log(userObj.recipes)
      res.json(userObj.recipes);
    })
    .catch((err) => {
      res.json(err);
    });
}

function favorite(req, res) {
  console.log('hit create recipes');
  // TODO: create the recipe
  Recipe.create(req.body).then((recipe) => {
    User.findById(req.user._id).then((user) => {
      user.recipes.push(recipe._id);
      user.save();
    });
    res.status(200).json(recipe._id);
  });
}

function getOne(req, res) {
  console.log('hit getOne recipes');
  // TODO
  Recipe.findById(req.params.id)
    .then((recipe) => {
      res.json(recipe);
    })
    .catch((err) => {
      res.json(err);
    });
}

function update(req, res) {
  console.log('hit update recipes');
  // TODO: write a function to update the ingredients in a recipe later.
}

function deleteRecipe(req, res) {
  console.log('hit update recipes');
  // TODO
  Recipe.findOneAndDelete({ _id: req.params.id }).then((recipe) => {
    User.findById(req.user._id).then((user) => {
      user.recipes.forEach((recipe, index) => {
        user.recipes.splice(index, 1);
      });
      user.save();
    });
    res.status(200).json(recipe);
  });
}
