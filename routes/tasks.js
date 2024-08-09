const express = require('express');
const router = express.Router();
const taskscontrollers = require('../controller/taskscontrollers');

router.get('/tasks', taskscontrollers.getAllTasks);
router.get('/tasks/:id', taskscontrollers.getTaskById);
router.post('/tasks', taskscontrollers.createTask);
router.put('/tasks/:id', taskscontrollers.updateTask);
router.delete('/tasks/:id', taskscontrollers.deleteTask);

module.exports = router;
