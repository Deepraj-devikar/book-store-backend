"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCart = exports.addBook = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _cart = _interopRequireDefault(require("../models/cart.model"));
var BookService = _interopRequireWildcard(require("../services/book.service"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
//add book to cart
var addBook = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(userId, bookId) {
    var book, cart, cartHasBook, bookIndex, newCart, incObject;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return BookService.getBook(bookId);
        case 2:
          book = _context.sent;
          if (book) {
            _context.next = 5;
            break;
          }
          return _context.abrupt("return", {
            error: 1,
            status: HttpStatus.NOT_FOUND,
            message: "Book Not found."
          });
        case 5:
          _context.next = 7;
          return getCart(userId);
        case 7:
          cart = _context.sent;
          if (cart) {
            _context.next = 13;
            break;
          }
          _context.next = 11;
          return _cart["default"].create({
            userID: userId,
            books: [{
              productID: book._id,
              description: book.description,
              bookName: book.bookName,
              author: book.author,
              quantity: 1,
              price: book.price
            }],
            cartTotal: book.price
          });
        case 11:
          cart = _context.sent;
          return _context.abrupt("return", cart);
        case 13:
          cartHasBook = false;
          bookIndex = 0;
        case 15:
          if (!(bookIndex < cart.books.length)) {
            _context.next = 22;
            break;
          }
          if (!(cart.books[bookIndex].productID == book._id)) {
            _context.next = 19;
            break;
          }
          cartHasBook = true;
          return _context.abrupt("break", 22);
        case 19:
          bookIndex++;
          _context.next = 15;
          break;
        case 22:
          if (cartHasBook) {
            incObject = {};
            incObject["books." + bookIndex + ".quantity"] = 1;
            incObject["cartTotal"] = book.price;
            newCart = _cart["default"].updateOne({
              _id: cart._id
            }, {
              $inc: incObject
            });
          } else {
            newCart = _cart["default"].updateOne({
              _id: cart._id
            }, {
              $push: {
                books: {
                  productID: book._id,
                  description: book.description,
                  bookName: book.bookName,
                  author: book.author,
                  quantity: 1,
                  price: book.price
                }
              },
              $inc: {
                cartTotal: book.price
              }
            });
          }
          return _context.abrupt("return", newCart);
        case 24:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function addBook(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

//get user cart
exports.addBook = addBook;
var getCart = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(userId) {
    var data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _cart["default"].findOne({
            userID: userId
          });
        case 2:
          data = _context2.sent;
          return _context2.abrupt("return", data);
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function getCart(_x3) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getCart = getCart;