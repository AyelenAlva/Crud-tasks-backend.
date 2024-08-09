const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'tasks_db'
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar la base de datos', err);
    throw err;
  }
  console.log('base de datos conectada con exitos');
});

module.exports = db;
