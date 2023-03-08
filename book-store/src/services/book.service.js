import Book from '../models/book.model';

//get all books
export const getAllBooks = async (query) => {
  let filterObject = {};
  let skip = 0;
  let limit = 5;
  if(query.q){
    filterObject = {
      $or :[
        {description: {$regex : '.*'+query.q+'.*'}},
        {bookName: {$regex : '.*'+query.q+'.*'}},
        {author: {$regex : '.*'+query.q+'.*'}}
      ]
    };
  }
  if(query.page){
    skip = (parseInt(query.page) - 1) * limit;
  }
  const data = await Book.find(filterObject).sort({createdAt: -1}).skip(skip).limit(limit);
  return data;
};

//get single book
export const getBook = async (id) => {
  const data = await Book.findById(id);
  return data;
};
