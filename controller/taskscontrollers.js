const db = require('../db/conexion'); 



const getAllTasks = (req, res) => {
    const query = 'SELECT * FROM tasks';
    
    db.query(query, (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'Error al recuperar' });
      }
      res.json(results);
    });
  };
  
  
const getTaskById = (req, res) => {
  const tasksId = req.params.id;
  const query = 'SELECT * FROM tasks WHERE id = ?';
  
  db.query(query, [tasksId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Error al recuperar' });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'Tarea no encontrado' });
    }
    res.json(results[0]);
  });
};

const createTask = (req, res) => {
  const { title, description, isComplete } = req.body;
  const query = 'INSERT INTO tasks (title, description, isComplete) VALUES (?, ?, ?)';
  
  db.query(query, [title, description, isComplete], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Error al crear ' });
    }
    res.status(201).json({ id: results.insertId, title, description, isComplete });
  });
};


const updateTask = (req, res) => {
  const tasksId = req.params.id;
  const { title, description, isComplete } = req.body;
  const query = 'UPDATE tasks SET title = ?, description = ?, isComplete = ?  WHERE id = ?';
  
  db.query(query, [title, description, isComplete, tasksId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Error al actualizar' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }
    res.json({ id: tasksId, title, description, isComplete });
  });
};


const deleteTask = (req, res) => {
    const tasksId = req.params.id;
    const query = 'DELETE FROM tasks WHERE id = ?';
  
    db.query(query, [tasksId], (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'Error al borrar la tarea' });
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
      }
      res.status(200).json({ mensaje: 'Tarea eliminada exitosamente', id: tasksId });
    });
  };
  
module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
