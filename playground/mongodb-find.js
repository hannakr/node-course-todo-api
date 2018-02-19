//const MongoClient = require('mongodb').MongoClient;
//require statment re-worked to use object restructuring
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5a83d0c550712d8f6329e39d')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  //   client.close();
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  //   client.close();
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({name: "Hanna Ruotsalainen"}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
    client.close();
  }, (err) => {
    console.log('Unable to fetch users', err);
  });

  //client.close();
});
