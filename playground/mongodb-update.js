//const MongoClient = require('mongodb').MongoClient;
//require statment re-worked to use object restructuring
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a83d0c550712d8f6329e39d')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  //   client.close();
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a8a6fe8b4f7aebf4d916311')
  }, {
    $set: {
      name: 'Hanna Ruotsalainen'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
    client.close();
  });


  //client.close();
});
