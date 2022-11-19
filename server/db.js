const mongoose = require("mongoose");

module.exports = mongoose
    .connect("mongodb://127.0.0.1:27017/todo-app")
    .then(() => console.log('Connected to DB Successfully'))
    .catch((err) => console.log("Could not connect to db", err))

