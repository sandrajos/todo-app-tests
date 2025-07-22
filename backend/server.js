
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let todos = [];
let currentId = 1;
const USERS = [{ username: 'admin', password: 'admin' }];

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = USERS.find(u => u.username === username && u.password === password);
  if (user) return res.json({ token: 'fake-jwt-token' });
  res.status(401).json({ error: 'Invalid credentials' });
});

app.get('/todos', (req, res) => res.json(todos));

app.post('/todos', (req, res) => {
  const { text } = req.body;
  const todo = { id: currentId++, text };
  todos.push(todo);
  res.status(201).json(todo);
});

app.put('/todos/:id', (req, res) => {
  const id = +req.params.id;
  const todo = todos.find(t => t.id === id);
  if (!todo) return res.status(404).json({ error: 'Not found' });
  todo.text = req.body.text;
  res.json(todo);
});

app.delete('/todos/:id', (req, res) => {
  const id = +req.params.id;
  todos = todos.filter(t => t.id !== id);
  res.status(204).end();
});

module.exports = app;
if (require.main === module) app.listen(4000, () => console.log('Backend on 4000'));
