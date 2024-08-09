const express = require('express');
const app = express();
const tasksRoutes = require('./routes/tasks');

app.use(express.json());
app.use('/', tasksRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
