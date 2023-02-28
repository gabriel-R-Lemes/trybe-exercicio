const express = require('express');

// const User = require('./controllers/user.controller');

const app = express();
const Book = require('./controllers/book.controller');
app.use(express.json());

app.get('/book', Book.getAll);

app.get('/book/:id', Book.getById);

app.post('/book', Book.createBook);

app.put('/book/:id', Book.updateBook);

app.delete('/book/:id', Book.deleteBook);
module.exports = app;