"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerUser = exports.loginUser = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));
var _user = _interopRequireDefault(require("../models/user.model"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
//register user
var registerUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(body) {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          // password hashing before saving to database
          body.password = _bcrypt["default"].hashSync(body.password, parseInt(process.env.SALT_ROUND));
          _context.next = 3;
          return _user["default"].create(body);
        case 3:
          data = _context.sent;
          return _context.abrupt("return", data);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function registerUser(_x) {
    return _ref.apply(this, arguments);
  };
}();

//login user
exports.registerUser = registerUser;
var loginUser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(body) {
    var user, isMatchedPassword, token;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _user["default"].findOne({
            email: body.email
          });
        case 2:
          user = _context2.sent;
          if (user) {
            _context2.next = 5;
            break;
          }
          return _context2.abrupt("return", {
            error: 1,
            status: _httpStatusCodes["default"].NOT_FOUND,
            message: "User Not found."
          });
        case 5:
          _context2.next = 7;
          return _bcrypt["default"].compare(body.password, user.password);
        case 7:
          isMatchedPassword = _context2.sent;
          if (isMatchedPassword) {
            _context2.next = 10;
            break;
          }
          return _context2.abrupt("return", {
            error: 1,
            status: _httpStatusCodes["default"].UNAUTHORIZED,
            message: "Invalid Password!"
          });
        case 10:
          token = _jsonwebtoken["default"].sign({
            id: user.id,
            email: user.email
          }, process.env.AUTH_SECRET_KEY);
          return _context2.abrupt("return", {
            error: 0,
            status: _httpStatusCodes["default"].OK,
            ok: 'ok',
            user: user,
            token: token,
            message: "Login successfull"
          });
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function loginUser(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
exports.loginUser = loginUser;