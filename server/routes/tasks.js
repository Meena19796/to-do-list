const express = require('express')
const router = express.Router();
const Task = require('../models/task')


router.post("/", async (req, res) => {
    try {
        const task = await new Task(req.body).save();
        res.send(task);
    } catch (error) {
        res.send(error)
    }
})

router.get("/", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.send(tasks);
    } catch (error) {
        res.send(error)
    }
})

router.put("/:id", async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(
            { _id: req.params.id },
            req.body
        )
        res.send(task)
    } catch (error) {
        res.send(error)
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const task = await Task.findByIdAndRemove(req.params.id);
        res.send(task);
    } catch (error) {
        res.send(error);
    }
})
module.exports = router;