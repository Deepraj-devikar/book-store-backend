import Book from '../models/book.model';

//get all books
export const getAllBooks = async (query) => {
  const data = await Book.find();
  return data;
};

//get single book
export const getBook = async (id) => {
  const data = await Book.findById(id);
  return data;
};
