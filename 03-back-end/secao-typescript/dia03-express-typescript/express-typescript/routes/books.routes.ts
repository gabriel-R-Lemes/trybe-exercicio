// ./routes/books.routes.ts

import { Router } from 'express';
import BooksController from '../controllers/books.controller';
import validatePartialBook from '../middlewares/validations';

const router = Router();

const booksController = new BooksController();
const bookSlashId = '/books/:id';

router.get('/books', booksController.getAll);
router.get(bookSlashId, booksController.getById);
router.post('/books', booksController.create);
router.put(bookSlashId, booksController.update);
router.delete(bookSlashId, booksController.remove);
router.patch(bookSlashId, validatePartialBook, booksController.partialUpdate);

export default router;