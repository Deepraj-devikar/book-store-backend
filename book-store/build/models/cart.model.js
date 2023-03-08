"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var cartSchema = new _mongoose.Schema({
  userID: {
    type: String
  },
  books: [{
    productID: {
      type: String
    },
    description: {
      type: String
    },
    bookName: {
      type: String
    },
    bookImage: {
      type: String
    },
    author: {
      type: String
    },
    quantity: {
      type: Number,
      "default": 1
    },
    price: {
      type: Number
    }
  }],
  cartTotal: {
    type: Number,
    "default": 0
  },
  isPurchased: {
    type: Boolean,
    "default": false
  }
}, {
  timestamps: true
});
var _default = (0, _mongoose.model)('Cart', cartSchema);
exports["default"] = _default;