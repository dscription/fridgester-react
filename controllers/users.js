const User = require('../models/user');

module.exports = {
  index,
  addFridgeItem,
  removeFridgeItem,
};

function index(req, res) {
  User.find({}).then((users) => res.json(users));
}

function addFridgeItem(req, res) {
  User.findById(req.user._id).then((user) => {
    user.currentFridge.push(req.body);
    user.save();
    res.json(user.currentFridge);
  });
}

function removeFridgeItem(req, res) {
  User.findById(req.user._id).then((user) => {
    user.currentFridge.forEach((item, index) => {
      if (item._id == req.params.id) {
        user.currentFridge.splice(index, 1)
      }
    });
    user.save();
    res.json(user.currentFridge);
  });
}
