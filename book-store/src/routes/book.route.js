import express from 'express';
import * as bookController from '../controllers/book.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to get all books
router.get('', userAuth, bookController.getAllBooks);

//route to get a single book by their book id
router.get('/:_id', userAuth, bookController.getBook);

export default router;
