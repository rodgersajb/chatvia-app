const express = require("express");
require("../db/connect")
const User = require("../models/test")




const app = express();
const port = 3000;

app.use(express.json());

app.post("/users", (req, res) => {
    const user = new User(req.body);

    user.save().then(() => {
        res.status(201).send(user)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

app.listen(port, () => {
    console.log(`we are up and running on port ${port}`)
})