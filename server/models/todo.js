const mongoose = require('mongoose');

const Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {Todo};

// const newTodo = new Todo({
//   text: 'Buy turtles'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo:', doc);
// }, (err) => {
//   console.log('Unable to save todo:', err);
// });
