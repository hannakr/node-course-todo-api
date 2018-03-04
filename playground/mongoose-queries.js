const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

const id = '5a90ef263344ed026d2290ca';

User.findById(id).then((user) => {
  if(!user) {
    return console.log('Id not found');
    // test this by changing a number in the ID
  }
  console.log('User By Id', user);
}).catch((e) => console.log(e));
// test this by adding '11' to the end of the ID

// const id = '5a9b74ff34bec334c30c85fc';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// // returns an array
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// // returns an object
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// if you're only looking to get one thing back, use findOne
// if the thing you're looking for doesn't exist it will return null
// instead of an empty array

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));
