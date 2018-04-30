'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _addPackingItemWeb = require('./addPackingItemWeb');

var _addPackingItemWeb2 = _interopRequireDefault(_addPackingItemWeb);

var _simpleListWeb = require('./simpleListWeb');

var _simpleListWeb2 = _interopRequireDefault(_simpleListWeb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Switch out for reactNative?
var RNItems = {};
if (!navigator.platform) {
  RNItems = {
    AddPackingItem: require('./native/addPackingItem'),
    SimpleList: require('./native/simpleListWeb'),
    MultiButtonColumn: require('./native/multiButtonColumn')
  };
}

exports.default = _extends({
  AddPackingItem: _addPackingItemWeb2.default,
  SimpleList: _simpleListWeb2.default
}, RNItems);
