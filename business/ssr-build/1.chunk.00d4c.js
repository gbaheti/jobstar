exports.ids = [1,3];
exports.modules = {

/***/ "BtRA":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"wrapper":"wrapper__yQ96r","title":"title__2WSDM","list":"list__3a7c1","listItem":"listItem__RFJur"};

/***/ }),

/***/ "gEyv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextField; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style__ = __webpack_require__("BtRA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


// import cx from 'classnames';



var TextField = function (_Component) {
  _inherits(TextField, _Component);

  function TextField(props) {
    _classCallCheck(this, TextField);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.handleChange = function (e) {
      _this.props.updateChange(e.target.value);
    };

    return _this;
  }

  TextField.prototype.render = function render() {
    var _this2 = this;

    return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
      'div',
      { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.wrapper },
      Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        'h2',
        { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.title },
        this.props.title
      ),
      Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        'ul',
        { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.list },
        this.props.options.map(function (option) {
          return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'li',
            { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.listItem },
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
              'label',
              null,
              option
            ),
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('input', { type: 'text', name: 'radio', onChange: _this2.handleChange })
          );
        })
      )
    );
  };

  return TextField;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ })

};;
//# sourceMappingURL=1.chunk.00d4c.js.map