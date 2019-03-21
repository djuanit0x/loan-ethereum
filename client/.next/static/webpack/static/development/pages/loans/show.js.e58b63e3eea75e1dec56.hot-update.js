webpackHotUpdate("static/development/pages/loans/show.js",{

/***/ "./pages/loans/show.js":
/*!*****************************!*\
  !*** ./pages/loans/show.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Show; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_RepaymentsRow__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/RepaymentsRow */ "./components/RepaymentsRow.js");
/* harmony import */ var _utils_loan__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../utils/loan */ "./utils/loan.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_18__);




















var Show =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["default"])(Show, _Component);

  function Show() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Show);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__["default"])(Show)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this)), "state", {
      rePayments: [],
      loanTitle: '',
      lenderAddress: '',
      borrowerAddress: '',
      loanContractAddress: '',
      loadings: []
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this)), "componentDidMount",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.setState({
                rePayments: _this.props.rePayments,
                loanTitle: _this.props.loanTitle,
                lenderAddress: _this.props.lenderAddress,
                borrowerAddress: _this.props.borrowerAddress,
                loanContractAddress: _this.props.loanContractAddress,
                loadings: Array(_this.props.rePayments.length).fill(false)
              });

            case 2:
              debugger;
              console.log(_this.state);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this)), "renderRows", function () {
      return _this.state.rePayments.map(function (rePayment, index) {
        return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_RepaymentsRow__WEBPACK_IMPORTED_MODULE_16__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
          key: index,
          month: index,
          loanContractAddress: _this.state.loanContractAddress,
          loading: _this.state.loadings[index],
          handleLoadingChange: _this.handleLoadingChange,
          handleMonthToIsPaidChange: _this.handleMonthToIsPaidChange
        }, rePayment));
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this)), "handleLoadingChange",
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee2(val, idx) {
        var newLoadingsArr;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                debugger;
                newLoadingsArr = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_this.state.loadings);
                newLoadingsArr[idx] = val;
                debugger;
                _context2.next = 6;
                return _this.setState({
                  loadings: newLoadingsArr
                });

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this)), "handleMonthToIsPaidChange",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee3() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              console.log(_this.props.rePayments);
              _context3.next = 3;
              return _routes__WEBPACK_IMPORTED_MODULE_18__["Router"].pushRoute("/loans/".concat(_this.state.loanContractAddress));

            case 3:
              console.log(_this.props.rePayments);
              _context3.next = 6;
              return _this.setState({
                rePayments: _this.props.rePayments
              });

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    })));

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(Show, [{
    key: "render",
    value: function render() {
      var Header = semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"].Header,
          Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"].Row,
          HeaderCell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"].HeaderCell,
          Body = semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"].Body;
      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_15__["default"], null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Card"], {
        fluid: true
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Card"].Content, {
        textAlign: "center"
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Card"].Header, null, this.state.loanTitle), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Card"].Meta, null, this.state.loanContractAddress), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Card"].Description, null, "Lender: ", this.state.lenderAddress), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Card"].Description, null, "Borrower: ", this.state.borrowerAddress))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"], {
        celled: true
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(Header, null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(Row, null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(HeaderCell, null, "Month"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(HeaderCell, null, "Date"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(HeaderCell, null, "Balance"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(HeaderCell, null, "Payment"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(HeaderCell, null, "Interest"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(HeaderCell, null, "Principal"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(HeaderCell, null, "Status"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(HeaderCell, null))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(Body, null, this.renderRows())));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee4(props) {
        var loanContractAddress, loan, rePaymentsCount, loanTitle, lenderAddress, borrowerAddress, rePayments;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                loanContractAddress = props.query.address;
                _context4.next = 3;
                return Object(_utils_loan__WEBPACK_IMPORTED_MODULE_17__["default"])(loanContractAddress);

              case 3:
                loan = _context4.sent;
                _context4.next = 6;
                return loan.methods.getRepaymentsCount().call();

              case 6:
                rePaymentsCount = _context4.sent;
                _context4.next = 9;
                return loan.methods.loanTitle().call();

              case 9:
                loanTitle = _context4.sent;
                _context4.next = 12;
                return loan.methods.lender().call();

              case 12:
                lenderAddress = _context4.sent;
                _context4.next = 15;
                return loan.methods.borrower().call();

              case 15:
                borrowerAddress = _context4.sent;
                _context4.next = 18;
                return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.all(Array(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(rePaymentsCount)).fill().map(function (element, index) {
                  return loan.methods.rePayments(index).call();
                }));

              case 18:
                rePayments = _context4.sent;
                return _context4.abrupt("return", {
                  rePayments: rePayments,
                  loanTitle: loanTitle,
                  lenderAddress: lenderAddress,
                  borrowerAddress: borrowerAddress,
                  loanContractAddress: loanContractAddress
                });

              case 20:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function getInitialProps(_x3) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return Show;
}(react__WEBPACK_IMPORTED_MODULE_13__["Component"]);



/***/ })

})
//# sourceMappingURL=show.js.e58b63e3eea75e1dec56.hot-update.js.map