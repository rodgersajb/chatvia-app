const express = require('express')
require('./mongoose')

const app = express();
const port = 3000;

// express can parse the incoming information for us. Automatically parses json into an object for us to use

app.use(express.json());

app.get("/users", (req, res) => {
  User.find({})
    .then((users) => {
      res.status(201).send(users);
    })
    .catch((e) => {
      res.status(500).send();
    });
});

app.listen(port, () => {
    console.log("working!")
})