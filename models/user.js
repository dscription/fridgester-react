const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const SALT_ROUNDS = 6;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      // required: true,
      lowercase: true,
    },
    lastName: {
      type: String,
      // required: true,
      lowercase: true,
    },
    email: {
      type: String,
      // required: true,
      lowercase: true,
      unique: true,
    },

    password: String,
    currentFridge: [{ type: Schema.Types.ObjectId, ref: 'FridgeItem' }],
    fridgeHistory: [{ type: Schema.Types.ObjectId, ref: 'FridgeItem' }],
    recipes: [{ type: Schema.Types.ObjectId, ref: 'Recipe' }],
  },
  { timestamps: true }
);

userSchema.set('toJSON', {
  transform: function (doc, ret) {
    // remove the password property when serializing doc to JSON
    delete ret.password;
    return ret;
  },
});

userSchema.pre('save', function (next) {
  // this will be set to the current document
  const user = this;
  if (!user.isModified('password')) return next();
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
