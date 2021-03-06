require("./config/config");

const _ = require("lodash");
const express = require("express");
const bodyParser = require("body-parser");
const { ObjectID } = require("mongodb");

const { mongoose } = require("./db/mongoose");
const { Todo } = require("./models/todo");
const { User } = require("./models/user");

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.post("/todos", (req, res) => {
  const todo = new Todo({
    text: req.body.text
  });

  todo.save().then(
    doc => {
      res.send(doc);
    },
    err => {
      res.status(400).send(err);
    }
  );
});

app.get("/todos", (req, res) => {
  Todo.find().then(
    todos => {
      res.send({ todos });
      // if you send back an object instead of just the array
      // then you can add stuff to it
    },
    err => {
      res.status(400).send(err);
    }
  );
});

app.get("/todos/:id", (req, res) => {
  const id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findById(id)
    .then(
      todo => {
        if (!todo) {
          return res.status(404).send();
        }
        res.send({ todo });
      },
      err => {
        // this would catch any errors in the findById call (e.g. if the db goes away)
        // but not errors in how we handle the result of that call
        res.status(400).send();
      }
    )
    .catch(e => {
      // this catches anything that goes wrong in the above code
      // use this instead of the above option
      res.status(400).send();
    });
});

app.delete("/todos/:id", (req, res) => {
  // get the id
  const id = req.params.id;

  // validate the id -> not valid? return 404
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  // remove todo by id
  Todo.findByIdAndRemove(id)
    .then(todo => {
      // success
      // if no doc, send 404
      if (!todo) {
        return res.status(404).send();
      }
      // if doc, send doc back with 200
      res.send({ todo });
      // error
      // 400 with empty body
    })
    .catch(e => {
      // this catches anything that goes wrong in the above code
      // use this instead of the above option
      res.status(400).send();
    });
});

app.patch("/todos/:id", (req, res) => {
  const id = req.params.id;
  const body = _.pick(req.body, ["text", "completed"]);

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, { $set: body }, { new: true })
    .then(todo => {
      if (!todo) {
        return res.status(404).send();
      }
      res.send({ todo });
    })
    .catch(e => {
      res.status(400).send();
    });
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = { app };
