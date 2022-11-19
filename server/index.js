const cors = require("cors");
const express = require('express');
const tasks = require('./routes/tasks')
require("./db");
const app = express()
app.use(express.json())
app.use(cors())
app.use("/api/tasks", tasks);



const port = 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`))