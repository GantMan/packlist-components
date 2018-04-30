'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddPackingItem = function (_Component) {
  _inherits(AddPackingItem, _Component);

  function AddPackingItem() {
    _classCallCheck(this, AddPackingItem);

    return _possibleConstructorReturn(this, (AddPackingItem.__proto__ || Object.getPrototypeOf(AddPackingItem)).apply(this, arguments));
  }

  _createClass(AddPackingItem, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: styles.container },
        _react2.default.createElement('input', {
          placeholder: 'Packing Item',
          type: 'text',
          onChange: this.props.setNewItemText,
          value: this.props.value,
          style: styles.inputStyle
        }),
        _react2.default.createElement(
          'button',
          {
            style: styles.buttonAdd,
            onClick: this.props.addItem
          },
          'ADD'
        ),
        _react2.default.createElement(
          'button',
          {
            style: styles.buttonClear,
            onClick: this.props.clear
          },
          'CLEAR'
        )
      );
    }
  }]);

  return AddPackingItem;
}(_react.Component);

exports.default = AddPackingItem;


var buttonStyle = {
  alignSelf: 'center',
  borderRadius: 4,
  margin: 5,
  height: 30
};
var styles = {
  inputStyle: {
    flex: 1,
    backgroundColor: '#ddf',
    paddingHorizontal: 4,
    height: 30,
    borderRadius: 4,
    borderStyle: 'solid',
    border: 'none'
  },
  buttonAdd: _extends({}, buttonStyle, {
    backgroundColor: '#cfc'
  }),
  buttonClear: _extends({}, buttonStyle, {
    backgroundColor: '#faa'
  }),
  container: {
    flexDirection: 'row',
    padding: 5
  }
};
