const FridgeItem = require('../models/fridgeItem');

module.exports = {
  index,
  create,
  getOne,
  update,
  delete: deleteFridgeItem,
};

function index(req, res) {
  console.log('hit index fridgeITems');
  // TODO
}

function create(req, res) {
  console.log('hit create fridgeITems');

  // TODO
}

function getOne(req, res) {
  console.log('hit getOne fridgeITems');

  // TODO
}

function update(req, res) {
  console.log('hit update fridgeITems');

  // TODO
}

function deleteFridgeItem(req, res) {
  console.log('hit delete fridgeItems');
  // TODO
}
