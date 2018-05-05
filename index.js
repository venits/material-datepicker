'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _styles = require('material-ui/styles');

var _Table = require('material-ui/Table');

var _Table2 = _interopRequireDefault(_Table);

var _Typography = require('material-ui/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _NavigateBefore = require('material-ui-icons/NavigateBefore');

var _NavigateBefore2 = _interopRequireDefault(_NavigateBefore);

var _NavigateNext = require('material-ui-icons/NavigateNext');

var _NavigateNext2 = _interopRequireDefault(_NavigateNext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Material UI
var styles = {
  datePicker: {
    margin: '0px',
    position: 'static',
    top: '0px',
    backgroundColor: ' #fff',
    boxShadow: ' rgba(0, 0, 0, 0.247059) 0px 14px 45px, rgba(0, 0, 0, 0.219608) 0px 10px 18px',
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    left: '0px',
    zIndex: ' 10000',
    '& th': {
      color: 'rgba(0, 0, 0, 0.38)',
      fontSize: '12px',
      textAlign: 'center',
      border: 'none !important',
      padding: '0px !important',
      fontWeight: '500'
    },
    '& tr': {
      height: '34px'
    },
    '& td': {
      textAlign: 'center',
      border: 'none !important',
      padding: '0px !important'
    }
  },
  summary: {
    backgroundColor: '#00B6DC',
    color: '525e66',
    padding: '15px 10px'
  },
  summaryYear: {
    fontSize: '16px',
    opacity: '0.7'
  },
  summaryDate: {
    fontSize: '24px'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '16px',
    fontWeight: '500',
    '& > p': {
      fontWeight: '500',
      display: 'block'
    }
  },
  disabled: {
    '& > div': {
      opacity: '0.5'
    },
    '&:hover > div': {
      backgroundColor: '#fff !important',
      cursor: 'not-allowed',
      color: '#525e66 !important'
    }
  },
  otherMonth: {
    opacity: '0.7'
  },
  date: {
    '& > div': {
      borderRadius: 'none !important',
      '&:after': {
        content: ' ',
        display: 'block',
        width: '100px',
        height: '100px',
        backgroundColor: '#000'
      }
    }
  },
  currentDate: {
    '& button': {
      height: '30px',
      width: '30px',
      opacity: '1 !important',
      fontWeight: 'bold',
      border: '1px solid #83959f'
    }
  },
  selectedDate: {
    '& button': {
      fontWeight: '500',
      backgroundColor: '#00b6dc !important',
      color: '#fff',
      opacity: '1',
      height: '40px',
      width: '40px',
      border: 'none',
      zIndex: 1
    }
  },
  inRange: {
    '& > div': {
      backgroundColor: '#cef6ff'
    }
  },
  startDate: {
    position: 'relative',
    '&:after': {
      display: 'block',
      content: '\'\'',
      width: '50%',
      height: '40px',
      backgroundColor: 'cef6ff',
      position: 'absolute',
      top: '0px',
      right: '0px',
      pointerEvents: 'none',
      zIndex: 0
    }
  },
  endDate: {
    position: 'relative',
    '&:after': {
      display: 'block',
      content: '\'\'',
      width: '50%',
      height: '40px',
      backgroundColor: 'cef6ff',
      position: 'absolute',
      top: '0px',
      left: '0px',
      pointerEvents: 'none'
    }
  },
  dates: {
    width: '40px',
    fontSize: '12px',
    height: '40px',
    color: 'rgba(54, 63, 69, 0.87)'
  },
  footer: {
    padding: '10px',
    display: 'flex',
    justifyContent: 'flex-end',
    '& > button': {
      marginLeft: '10px'
    }
  }
};

var DatePicker = function (_React$Component) {
  (0, _inherits3.default)(DatePicker, _React$Component);

  function DatePicker(props) {
    (0, _classCallCheck3.default)(this, DatePicker);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DatePicker.__proto__ || (0, _getPrototypeOf2.default)(DatePicker)).call(this, props));

    _this.state = {
      selectedDate: _this.props.defaultValue ? (0, _moment2.default)(_this.props.defaultValue) : undefined,
      endDate: _this.props.range && _this.props.endDate ? (0, _moment2.default)(_this.props.endDate) : undefined
    };

    window.moment = _moment2.default;
    _this.state = _this.buildMonth(new Date().getMonth(), new Date().getFullYear());

    if (_this.props.minDate) {
      _this.minDate = (0, _moment2.default)([_this.props.minDate.getFullYear(), _this.props.minDate.getMonth(), _this.props.minDate.getDate()]);
    }
    if (_this.props.maxDate) {
      _this.maxDate = (0, _moment2.default)([_this.props.maxDate.getFullYear(), _this.props.maxDate.getMonth(), _this.props.maxDate.getDate()]);
    }
    return _this;
  }

  (0, _createClass3.default)(DatePicker, [{
    key: 'daysInMonth',
    value: function daysInMonth() {
      new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    }
  }, {
    key: 'buildMonth',
    value: function buildMonth(month, year) {
      var firstDay = (0, _moment2.default)([year, month]);
      var daysInMonth = firstDay.daysInMonth();

      var datesArray = [];
      for (var i = 0; i < daysInMonth; i++) {
        datesArray.push(firstDay.clone().add(i, 'days'));
      }

      var firstOffset = firstDay.weekday();
      for (var i = 1; i <= firstOffset; i++) {
        datesArray.unshift(firstDay.clone().subtract(i, 'days'));
      }

      var endOffset = datesArray.length % 7,
          lastDay = datesArray[datesArray.length - 1];
      if (endOffset == 0) {
        endOffset = 7;
      } else {
        endOffset = 7 - endOffset;
      }
      for (var i = 1; i <= endOffset; i++) {
        datesArray.push(lastDay.clone().add(i, 'days'));
      }

      return { month: month, year: year, firstDay: firstDay, daysInMonth: daysInMonth, datesArray: datesArray, currentDate: (0, _moment2.default)(new Date()), selectedDate: this.state.selectedDate, endDate: this.state.endDate };
    }
  }, {
    key: 'previousMonth',
    value: function previousMonth() {
      var year = this.state.year,
          month = this.state.month;
      if (this.state.month - 1 < 0) {
        month = 11;
        year = this.state.year - 1;
      } else {
        month -= 1;
      }
      this.setState(this.buildMonth(month, year));
    }
  }, {
    key: 'nextMonth',
    value: function nextMonth() {
      var year = this.state.year,
          month = this.state.month;
      if (this.state.month + 1 > 11) {
        month = 0;
        year = this.state.year + 1;
      } else {
        month += 1;
      }
      this.setState(this.buildMonth(month, year));
    }
  }, {
    key: 'selectDate',
    value: function selectDate(dt) {
      var _this2 = this;

      if (this.isDateDisabled(dt)) {
        return;
      }
      var selectedDate = dt,
          endDate = undefined;
      if (this.props.range) {
        if (this.state.selectedDate) {
          if (dt.isBefore(this.state.selectedDate)) {
            selectedDate = dt;
            endDate = this.state.selectedDate;
          } else {
            selectedDate = this.state.selectedDate;
            endDate = dt;
          }
        } else {
          selectedDate = dt;
        }

        if (this.state.selectedDate && this.state.endDate) {
          selectedDate = dt;
          endDate = undefined;
        }
      }
      this.setState((0, _assign2.default)({}, this.buildMonth(dt.month(), dt.year()), { selectedDate: selectedDate, endDate: endDate }), function () {
        if (_this2.props.range) {
          _this2.props.onChange(_this2.state.selectedDate, _this2.state.endDate);
        } else {
          _this2.props.onChange(_this2.state.selectedDate);
        }
      });
    }
  }, {
    key: 'isSame',
    value: function isSame(date1, date2) {
      if (date1 && date2 && date1.isSame(date2, 'day')) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: 'isInRange',
    value: function isInRange(dt) {
      var inRange = false;
      if (this.props.range) {
        if (this.state.selectedDate && this.state.endDate) {
          if (dt.isAfter(this.state.selectedDate) && dt.isBefore(this.state.endDate)) {
            inRange = true;
          }
        }
      }
      return inRange;
    }
  }, {
    key: 'isDateDisabled',
    value: function isDateDisabled(date) {
      if (this.minDate && date.isBefore(this.minDate)) {
        return true;
      }
      if (this.maxDate && date.isAfter(this.maxDate)) {
        return true;
      }
      return false;
    }
  }, {
    key: 'printMonth',
    value: function printMonth() {
      var _this3 = this;

      var totalWeeks = Math.ceil(this.state.datesArray.length / 7);
      return new Array(totalWeeks).fill(0).map(function (z, i) {
        return _this3.printWeek(i);
      });
    }
  }, {
    key: 'printWeek',
    value: function printWeek(n) {
      var self = this;
      return _react2.default.createElement(_Table.TableRow, { key: n }, new Array(7).fill(0).map(function (z, j) {
        var thisDate = self.state.datesArray[n * 7 + j];
        return _react2.default.createElement(_Table.TableCell, {
          key: j,
          className: self.props.classes.date + ' ' + (thisDate.month() != self.state.month ? self.props.classes.otherMonth : '') + ' ' + (self.isSame(thisDate, self.state.currentDate) ? self.props.classes.currentDate : '') + ' ' + (self.isSame(thisDate, self.state.selectedDate) || self.props.range && self.isSame(thisDate, self.state.endDate) ? self.props.classes.selectedDate : '') + ' ' + (self.isDateDisabled(thisDate) ? self.props.classes.disabled : '') + ' ' + (self.isInRange(thisDate) ? self.props.classes.inRange : '') + ' ' + (self.props.range && self.isSame(thisDate, self.state.endDate) ? self.props.classes.endDate : '') + ' ' + (self.props.range && self.state.endDate && self.isSame(thisDate, self.state.selectedDate) ? self.props.classes.startDate : '')
        }, _react2.default.createElement('div', null, _react2.default.createElement(_IconButton2.default, { className: self.props.classes.dates, onClick: self.selectDate.bind(self, thisDate) }, self.state.datesArray[n * 7 + j].date())));
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      var self = this;
      return _react2.default.createElement("div", { className: self.props.classes.datePicker }, self.props.range ? null : _react2.default.createElement("div", { className: self.props.classes.summary }, _react2.default.createElement(_Typography2.default, { className: self.props.classes.summaryYear }, self.state.selectedDate.year()), _react2.default.createElement(_Typography2.default, { className: self.props.classes.summaryDate }, _moment2.default.months()[self.state.selectedDate.month()], ", ", self.state.selectedDate.date())), _react2.default.createElement("div", { className: self.props.classes.header }, _react2.default.createElement(_IconButton2.default, { onClick: self.previousMonth.bind(self) }, _react2.default.createElement(_NavigateBefore2.default, null)), _react2.default.createElement(_Typography2.default, null, _moment2.default.months(self.state.month)), _react2.default.createElement(_IconButton2.default, { onClick: self.nextMonth.bind(self) }, _react2.default.createElement(_NavigateNext2.default, null))), _react2.default.createElement(_Table2.default, null, _react2.default.createElement(_Table.TableHead, null, _react2.default.createElement(_Table.TableRow, null, _react2.default.createElement(_Table.TableCell, null, "S"), _react2.default.createElement(_Table.TableCell, null, "M"), _react2.default.createElement(_Table.TableCell, null, "T"), _react2.default.createElement(_Table.TableCell, null, "W"), _react2.default.createElement(_Table.TableCell, null, "T"), _react2.default.createElement(_Table.TableCell, null, "F"), _react2.default.createElement(_Table.TableCell, null, "S"))), _react2.default.createElement(_Table.TableBody, null, self.printMonth())));
    }
  }]);
  return DatePicker;
}(_react2.default.Component);

exports.default = (0, _styles.withStyles)(styles)(DatePicker);
