import HttpStatus from 'http-status-codes';
import * as CartService from '../services/cart.service';

/**
 * Controller to add book to cart
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const addBook = async (req, res, next) => {
  try {
    const data = await CartService.addBook(req.body.userId, req.params.bookId);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Cart created successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to remove book from cart
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const removeBook = async (req, res, next) => {
  try {
    const data = await CartService.removeBook(req.body.userId, req.params.bookId);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'Book removed successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const purchase = async (req, res, next) => {
  try {
    const data = await CartService.purchase(req.body.userId);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'Book purchased successfully'
    });
  } catch (error) {
    next(error);
  }
}