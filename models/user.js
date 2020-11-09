const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const SALT_ROUNDS = 6;

const recipeSchema = new Schema({
  name: {type: String, required: true},
  originalLink: {type: String, required: true},
  originalIngredients: {type: Array},
  isFavorite: {tpye: Boolean, default: false},
  modifiedIngredients: {type: Array, default: []}
})

const fridgeItemSchema = new Schema({
  name: {type: String, required: true},
  expiration: Date,
  isPerishable: Boolean,
  isExpired: Boolean,
  image: String,
  dateAdded: Date,
  dateRemoved: Date,
})

const userSchema = new Schema({
  firstName: {
    type: String, 
    // required: true, 
    lowercase: true},
  lastName:  {type: String, 
    // required: true, 
    lowercase: true},
  email: {type: String, 
    // required: true, 
    lowercase: true, unique: true},

  password: String,
  currentFridge: [fridgeItemSchema],
  fridgeHistory: [fridgeItemSchema],
  recipes: [recipeSchema],

},
  { timestamps: true
});

userSchema.set('toJSON', {
  transform: function(doc, ret) {
    // remove the password property when serializing doc to JSON
    delete ret.password;
    return ret;
  }
});

userSchema.pre("save", function (next) {
  // this will be set to the current document
  const user = this;
  if (!user.isModified("password")) return next();
  // password has been changed - salt and hash it
  bcrypt.hash(user.password, SALT_ROUNDS, function (err, hash) {
    if (err) return next(err);
    // replace the user provided password with the hash
    user.password = hash;
    next();
  });
});

userSchema.methods.comparePassword = function (tryPassword, cb) {
  bcrypt.compare(tryPassword, this.password, cb);
};

module.exports = mongoose.model('User', userSchema);