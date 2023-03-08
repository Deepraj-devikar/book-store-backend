import express from 'express';
const router = express.Router();

import wishlistRoute from './wishlist.route';
import wishListRoute from './wishList.route';
import cartRoute from './cart.route';
import bookRoute from './book.route';
import userRoute from './user.route';
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/users', userRoute);

  router.use('/books', bookRoute);
  router.use('/carts', cartRoute);
  router.use('/wishlists', wishlistRoute);
  return router;
};

export default routes;
