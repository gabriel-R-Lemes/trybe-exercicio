const express = require('express');
require('express-async-errors'); 

const app = express();
const apiCredentials = require('./middlewares/apiCredentials');

let nextId = 3;
const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

app.use(express.json());
app.use(apiCredentials);

app.get('/teams', (req, res) => res.json(teams));

app.get('/teams/:id', (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  if (team) {
    res.json(team);
  } else {
    res.sendStatus(404);
  }
});

const validateTeam = (req, res, next) => {
  const { nome, sigla } = req.body;
  if (!nome) return res.status(400).json({ message: 'O campo "nome" é obrigatório'});
  if (!sigla) return res.status(400).json({ message: 'O campo "sigla" é obrigatório'});
  next();
};

// Arranja os middlewares para chamar validateTeam primeiro
app.post('/teams', validateTeam, (req, res) => {
  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

app.put('/teams/:id', validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  if (team) {
    const index = teams.indexOf(team);
    const updated = { id, ...req.body };
    teams.splice(index, 1, updated);
    res.status(201).json(updated);
  } else {
    res.sendStatus(400);
  }
});

app.delete('/teams/:id', (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  if (team) {
    const index = teams.indexOf(team);
    teams.splice(index, 1);
  }
  res.sendStatus(204);
});

module.exports = app;