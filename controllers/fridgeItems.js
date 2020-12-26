const FridgeItem = require('../models/fridgeItem');
const User = require('../models/user');

module.exports = {
  index,
  create,
  getOne,
  update,
  delete: deleteFridgeItem,
};

function index(req, res) {
  User.findById(req.user._id)
    .populate('currentFridge')
    .then((userObj) => {
      res.json(userObj.currentFridge);
    })
    .catch((err) => {
      res.json(err);
    });
}

function create(req, res) {
  // FridgeItem.create(req.body).then((fridgeItem) => {
  //   User.findById(req.user._id).then((user) => {
  //     user.currentFridge.push(fridgeItem._id);
  //     user.save();
  //   });
  //   res.status(200).json(fridgeItem);
  // });
  FridgeItem.create(req.body).then((createdFridgeItems) => {
    createdFridgeItems.forEach((createdFridgeItem) => {
      User.findById(req.user._id).then((user) => {
        user.currentFridge.push(createdFridgeItem._id);
        user.save()
      })
      res.status(200).json(createdFridgeItems)
    })
  })
}

function getOne(req, res) {
  FridgeItem.findById(req.params.id)
    .then((fridgeItem) => {
      res.json(fridgeItem);
    })
    .catch((err) => {
      res.json(err);
    });
}

// TODO: Update Fridge with different ingredients.
function update(req, res) {
  console.log('hit update fridgeITems');
}

function deleteFridgeItem(req, res) {
  FridgeItem.findOneAndDelete({ _id: req.params.id }).then((fridgeItem) => {
    User.findById(req.user._id).then((user) => {
      user.currentFridge.forEach((fridgeItem, index) => {
        if (fridgeItem == req.params.id) {
          user.currentFridge.splice(index, 1);
        }
      });
      user.save();
    });
    res.status(200).json(fridgeItem);
  });
}
