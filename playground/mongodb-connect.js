//const MongoClient = require('mongodb').MongoClient;
//require statment re-worked to use object restructuring
const {MongoClient, ObjectID} = require('mongodb');

const obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Hanna Ruotsalainen',
  //   age: 41,
  //   location: 'Vancouver'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user', err);
  //   }
  //   //the mongodb automatically generated objectID includes a timestamp
  //   //which we can get using the below method
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  client.close();
});
