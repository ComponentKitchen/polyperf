(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _Mixin = require('./src/Mixin1');

var _Mixin2 = _interopRequireDefault(_Mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (!window.Basic) {
  window.Basic = {};
} /*
   * This file is transpiled to create an ES5-compatible distribution in which
   * the package's main feature(s) are available via the window.Basic global.
   */

window.Basic.Mixin1 = _Mixin2.default;

},{"./src/Mixin1":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (base) {
  var Mixin1 = function (_base) {
    _inherits(Mixin1, _base);

    function Mixin1() {
      _classCallCheck(this, Mixin1);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Mixin1).apply(this, arguments));
    }

    _createClass(Mixin1, [{
      key: "createdCallback",
      value: function createdCallback() {
        if (_get(Object.getPrototypeOf(Mixin1.prototype), "createdCallback", this)) {
          _get(Object.getPrototypeOf(Mixin1.prototype), "createdCallback", this).call(this);
        }
      }
    }, {
      key: "Mixin1_Method_1",
      value: function Mixin1_Method_1(a, b) {
        return a + b;
      }
    }, {
      key: "Mixin1_Method_2",
      value: function Mixin1_Method_2(a, b) {
        return a + b;
      }
    }]);

    return Mixin1;
  }(base);

  return Mixin1;
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy1wYWNrYWdlcy9qcy1jb21wb25lbnQtbWl4aW5zL2VzNWdsb2JhbHMuanMiLCJqcy1wYWNrYWdlcy9qcy1jb21wb25lbnQtbWl4aW5zL3NyYy9NaXhpbjEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0tBOzs7Ozs7QUFFQSxJQUFJLENBQUMsT0FBTyxLQUFaLEVBQW1CO0FBQ2pCLFNBQU8sS0FBUCxHQUFlLEVBQWY7QUFDRCxDOzs7OztBQUVELE9BQU8sS0FBUCxDQUFhLE1BQWI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDWGUsVUFBQyxJQUFELEVBQVU7QUFBQSxNQUVqQixNQUZpQjtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsd0NBSUg7QUFDaEIsb0ZBQTJCO0FBQUU7QUFBMEI7QUFDeEQ7QUFOb0I7QUFBQTtBQUFBLHNDQVFMLENBUkssRUFRRixDQVJFLEVBUUM7QUFDcEIsZUFBTyxJQUFJLENBQVg7QUFDRDtBQVZvQjtBQUFBO0FBQUEsc0NBWUwsQ0FaSyxFQVlGLENBWkUsRUFZQztBQUNwQixlQUFPLElBQUksQ0FBWDtBQUNEO0FBZG9COztBQUFBO0FBQUEsSUFFRixJQUZFOztBQWtCdkIsU0FBTyxNQUFQO0FBQ0QsQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKlxuICogVGhpcyBmaWxlIGlzIHRyYW5zcGlsZWQgdG8gY3JlYXRlIGFuIEVTNS1jb21wYXRpYmxlIGRpc3RyaWJ1dGlvbiBpbiB3aGljaFxuICogdGhlIHBhY2thZ2UncyBtYWluIGZlYXR1cmUocykgYXJlIGF2YWlsYWJsZSB2aWEgdGhlIHdpbmRvdy5CYXNpYyBnbG9iYWwuXG4gKi9cblxuaW1wb3J0IE1peGluMSBmcm9tICcuL3NyYy9NaXhpbjEnO1xuXG5pZiAoIXdpbmRvdy5CYXNpYykge1xuICB3aW5kb3cuQmFzaWMgPSB7fTtcbn1cblxud2luZG93LkJhc2ljLk1peGluMSA9IE1peGluMTtcbiIsImV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgY2xhc3MgTWl4aW4xIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgfVxuXG4gICAgTWl4aW4xX01ldGhvZF8xKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgICBNaXhpbjFfTWV0aG9kXzIoYSwgYikge1xuICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIE1peGluMTtcbn07XG4iXX0=
