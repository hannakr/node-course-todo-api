const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// These methods return the removed document
// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5ab32595d460187c6940f257'}).then((todo) => {

});

Todo.findByIdAndRemove('5ab32595d460187c6940f257').then((todo) => {
  console.log(todo);
});
