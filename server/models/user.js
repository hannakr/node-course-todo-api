const mongoose = require('mongoose');

const User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

module.exports = {User};

// const newUser = new User({
//   email: 'hannar@ecuad.ca'
// });
//
// newUser.save().then((doc) => {
//   console.log('Saved user:', doc);
// }, (err) => {
//   console.log('Unable to save user:', err);
// });
