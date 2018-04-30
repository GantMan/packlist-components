'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleList = function (_Component) {
  _inherits(SimpleList, _Component);

  function SimpleList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SimpleList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SimpleList.__proto__ || Object.getPrototypeOf(SimpleList)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      allItems: []
    }, _this.listItems = function () {
      return _this.state.allItems.map(function (item) {
        return _react2.default.createElement(
          'div',
          { style: styles.itemContainer, key: item },
          item
        );
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SimpleList, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: styles.allItemsContainer },
        this.listItems()
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      return {
        allItems: nextProps.value
      };
    }
  }]);

  return SimpleList;
}(_react.Component);

exports.default = SimpleList;


var styles = {
  allItemsContainer: {
    display: 'inline-block'
  },
  itemContainer: {
    height: 15,
    padding: 4,
    borderBottom: '1px solid blue'
  }
};
