const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 3000;

// Permitir frontend acessar o backend
app.use(cors());

// Rota raiz
app.get('/', (req, res) => {
  res.send('Hello from CodeCraft Studio!');
});

// Rota de projetos
app.get('/projects', (req, res) => {
  const projects = JSON.parse(fs.readFileSync('../database/projects.json'));
  res.json(projects);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
