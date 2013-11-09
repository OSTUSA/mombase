var mongoose = require('mongoose')
  , bcrypt = require('bcrypt')
  , SALT_WORK_FACTOR = 10;

var userSchema = mongoose.Schema({
  first: {type: String, required: true},
  last: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  hash: String
});

userSchema.virtual('password_hash')
  .get(function() {
    return this.hash;
  })
  .set(function (password) {
    if (password) {
      var salt = bcrypt.genSaltSync(SALT_WORK_FACTOR);
      this.hash = bcrypt.hashSync(password, salt);
    }
  });

userSchema.virtual('password')
  .get(function() {
    return this._password;
  })
  .set(function (password) {
    if (password) {
      this._password = password;
      this.password_hash = password;
    }
  });

userSchema.methods.comparePassword = function(candidatePassword) {
    return bcrypt.compareSync(candidatePassword, this.hash);
};

module.exports = mongoose.model('User', userSchema);