const BookModel = require('../models/book.model');
const bookService = require('../services/book.service');

const getAll = async (req, res) => {
  const books = bookService.getAll();
  return res.status(200).json(books);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const book = bookService.getById(Number(id));
  if (!book) return res.status(404).json({message: 'Book not found'});
  return res.status(200).json(book);
};

const createBook = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await bookService.createBook(title, author, pageQuantity);
    return res.status(201).json(newBook);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({message: 'Error creating Book'});
  }

};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const bookObj = req.body;
    const updatedBook = await bookService.updateBook(Number(id), bookObj);

    if (!updatedBook) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json({message: 'Book updated'})
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({message: 'Error updating Book'});
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    await bookService.deleteBook(Number(id));
    return res.status(200).json({ message: 'Book deleted!' });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Error deleting Book' });
  }
};

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook,
}