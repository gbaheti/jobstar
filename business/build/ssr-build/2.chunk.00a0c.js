exports.ids = [2,4];
exports.modules = {

/***/ "Lg4C":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RadioList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__("9qb7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style__ = __webpack_require__("YJdR");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var RadioList = function (_Component) {
  _inherits(RadioList, _Component);

  function RadioList(props) {
    _classCallCheck(this, RadioList);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.handleChange = function (e) {
      _this.props.updateChange(e.target.value);
    };

    return _this;
  }

  RadioList.prototype.render = function render() {
    var _this2 = this;

    return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
      'div',
      { 'class': __WEBPACK_IMPORTED_MODULE_2__style___default.a.wrapper },
      Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        'h2',
        { 'class': __WEBPACK_IMPORTED_MODULE_2__style___default.a.title },
        this.props.title
      ),
      Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        'ul',
        { 'class': __WEBPACK_IMPORTED_MODULE_2__style___default.a.list },
        this.props.options.map(function (option) {
          return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'li',
            { 'class': __WEBPACK_IMPORTED_MODULE_2__style___default.a.listItem },
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
              'label',
              { 'class': __WEBPACK_IMPORTED_MODULE_2__style___default.a.label },
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('input', { type: 'radio', name: 'radio', value: option, onChange: _this2.handleChange }),
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'p',
                null,
                option
              )
            )
          );
        })
      )
    );
  };

  return RadioList;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "YJdR":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"wrapper":"wrapper__3J0Pi","title":"title__YB-_P","list":"list__25C3v","listItem":"listItem__19qwL","label":"label__2YU9k"};

/***/ })

};;
//# sourceMappingURL=2.chunk.00a0c.js.map