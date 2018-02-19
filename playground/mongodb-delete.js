//const MongoClient = require('mongodb').MongoClient;
//require statment re-worked to use object restructuring
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Buy garlic'}).then((result) => {
  //   console.log(result.result);
  //   client.close();
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Buy garlic'}).then((result) => {
  //   console.log(result.result);
  //   client.close();
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({text: 'Buy garlic'}).then((result) => {
  //   console.log(result);
  //   client.close();
  // });

  // db.collection('Users').deleteMany({name: 'Hanna Ruotsalainen'}).then((result) => {
  //   console.log(result.result);
  //   client.close();
  // });



  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5a863cdd50222f90d6f09381')
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
    client.close();
  });

  //client.close();
});
