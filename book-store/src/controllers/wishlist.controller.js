import HttpStatus from 'http-status-codes';
import * as WishlistService from '../services/wishlist.service';

/**
 * Controller to add book to wishlist
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const addBook = async (req, res, next) => {
  try {
    const data = await WishlistService.addBook(req.body.userID, req.params.bookId);
    if(data.message == 'Book not found.'){
      res.status(HttpStatus.NOT_FOUND).json({
        code: HttpStatus.NOT_FOUND,
        data: data,
        message: 'Book Not Found'
      });
    } else {
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: 'Cart created successfully'
      });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to add book to wishlist
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const removeBook = async (req, res, next) => {
  try {
    const data = await WishlistService.removeBook(req.body.userID, req.params.bookId);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'Book removed from wishlist successfully'
    });
  } catch (error) {
    next(error);
  }
};
