(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _Mixin = require('./src/Mixin1');

var _Mixin2 = _interopRequireDefault(_Mixin);

var _Mixin3 = require('./src/Mixin2');

var _Mixin4 = _interopRequireDefault(_Mixin3);

var _Mixin5 = require('./src/Mixin3');

var _Mixin6 = _interopRequireDefault(_Mixin5);

var _Mixin7 = require('./src/Mixin4');

var _Mixin8 = _interopRequireDefault(_Mixin7);

var _Mixin9 = require('./src/Mixin5');

var _Mixin10 = _interopRequireDefault(_Mixin9);

var _Mixin11 = require('./src/Mixin6');

var _Mixin12 = _interopRequireDefault(_Mixin11);

var _Mixin13 = require('./src/Mixin7');

var _Mixin14 = _interopRequireDefault(_Mixin13);

var _Mixin15 = require('./src/Mixin8');

var _Mixin16 = _interopRequireDefault(_Mixin15);

var _Mixin17 = require('./src/Mixin9');

var _Mixin18 = _interopRequireDefault(_Mixin17);

var _Mixin19 = require('./src/Mixin10');

var _Mixin20 = _interopRequireDefault(_Mixin19);

var _Mixin21 = require('./src/Mixin11');

var _Mixin22 = _interopRequireDefault(_Mixin21);

var _Mixin23 = require('./src/Mixin12');

var _Mixin24 = _interopRequireDefault(_Mixin23);

var _Mixin25 = require('./src/Mixin13');

var _Mixin26 = _interopRequireDefault(_Mixin25);

var _Mixin27 = require('./src/Mixin14');

var _Mixin28 = _interopRequireDefault(_Mixin27);

var _Mixin29 = require('./src/Mixin15');

var _Mixin30 = _interopRequireDefault(_Mixin29);

var _Mixin31 = require('./src/Mixin16');

var _Mixin32 = _interopRequireDefault(_Mixin31);

var _Mixin33 = require('./src/Mixin17');

var _Mixin34 = _interopRequireDefault(_Mixin33);

var _Mixin35 = require('./src/Mixin18');

var _Mixin36 = _interopRequireDefault(_Mixin35);

var _Mixin37 = require('./src/Mixin19');

var _Mixin38 = _interopRequireDefault(_Mixin37);

var _Mixin39 = require('./src/Mixin20');

var _Mixin40 = _interopRequireDefault(_Mixin39);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * This file is transpiled to create an ES5-compatible distribution in which
 * the package's main feature(s) are available via the window.Basic global.
 */

if (!window.Basic) {
  window.Basic = {};
}

window.Basic.Mixin1 = _Mixin2.default;
window.Basic.Mixin2 = _Mixin4.default;
window.Basic.Mixin3 = _Mixin6.default;
window.Basic.Mixin4 = _Mixin8.default;
window.Basic.Mixin5 = _Mixin10.default;
window.Basic.Mixin6 = _Mixin12.default;
window.Basic.Mixin7 = _Mixin14.default;
window.Basic.Mixin8 = _Mixin16.default;
window.Basic.Mixin9 = _Mixin18.default;
window.Basic.Mixin10 = _Mixin20.default;
window.Basic.Mixin11 = _Mixin22.default;
window.Basic.Mixin12 = _Mixin24.default;
window.Basic.Mixin13 = _Mixin26.default;
window.Basic.Mixin14 = _Mixin28.default;
window.Basic.Mixin15 = _Mixin30.default;
window.Basic.Mixin16 = _Mixin32.default;
window.Basic.Mixin17 = _Mixin34.default;
window.Basic.Mixin18 = _Mixin36.default;
window.Basic.Mixin19 = _Mixin38.default;
window.Basic.Mixin10 = _Mixin40.default;

},{"./src/Mixin1":2,"./src/Mixin10":3,"./src/Mixin11":4,"./src/Mixin12":5,"./src/Mixin13":6,"./src/Mixin14":7,"./src/Mixin15":8,"./src/Mixin16":9,"./src/Mixin17":10,"./src/Mixin18":11,"./src/Mixin19":12,"./src/Mixin2":13,"./src/Mixin20":14,"./src/Mixin3":15,"./src/Mixin4":16,"./src/Mixin5":17,"./src/Mixin6":18,"./src/Mixin7":19,"./src/Mixin8":20,"./src/Mixin9":21}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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
  var Mixin10 = function (_base) {
    _inherits(Mixin10, _base);

    function Mixin10() {
      _classCallCheck(this, Mixin10);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Mixin10).apply(this, arguments));
    }

    _createClass(Mixin10, [{
      key: "createdCallback",
      value: function createdCallback() {
        if (_get(Object.getPrototypeOf(Mixin10.prototype), "createdCallback", this)) {
          _get(Object.getPrototypeOf(Mixin10.prototype), "createdCallback", this).call(this);
        }
      }
    }, {
      key: "Mixin10_Method_1",
      value: function Mixin10_Method_1(a, b) {
        return a + b;
      }
    }, {
      key: "Mixin10_Method_2",
      value: function Mixin10_Method_2(a, b) {
        return a + b;
      }
    }]);

    return Mixin10;
  }(base);

  return Mixin10;
};

},{}],4:[function(require,module,exports){
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
  var Mixin11 = function (_base) {
    _inherits(Mixin11, _base);

    function Mixin11() {
      _classCallCheck(this, Mixin11);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Mixin11).apply(this, arguments));
    }

    _createClass(Mixin11, [{
      key: "createdCallback",
      value: function createdCallback() {
        if (_get(Object.getPrototypeOf(Mixin11.prototype), "createdCallback", this)) {
          _get(Object.getPrototypeOf(Mixin11.prototype), "createdCallback", this).call(this);
        }
      }
    }, {
      key: "Mixin11_Method_1",
      value: function Mixin11_Method_1(a, b) {
        return a + b;
      }
    }, {
      key: "Mixin11_Method_2",
      value: function Mixin11_Method_2(a, b) {
        return a + b;
      }
    }]);

    return Mixin11;
  }(base);

  return Mixin11;
};

},{}],5:[function(require,module,exports){
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
  var Mixin12 = function (_base) {
    _inherits(Mixin12, _base);

    function Mixin12() {
      _classCallCheck(this, Mixin12);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Mixin12).apply(this, arguments));
    }

    _createClass(Mixin12, [{
      key: "createdCallback",
      value: function createdCallback() {
        if (_get(Object.getPrototypeOf(Mixin12.prototype), "createdCallback", this)) {
          _get(Object.getPrototypeOf(Mixin12.prototype), "createdCallback", this).call(this);
        }
      }
    }, {
      key: "Mixin12_Method_1",
      value: function Mixin12_Method_1(a, b) {
        return a + b;
      }
    }, {
      key: "Mixin12_Method_2",
      value: function Mixin12_Method_2(a, b) {
        return a + b;
      }
    }]);

    return Mixin12;
  }(base);

  return Mixin12;
};

},{}],6:[function(require,module,exports){
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
  var Mixin13 = function (_base) {
    _inherits(Mixin13, _base);

    function Mixin13() {
      _classCallCheck(this, Mixin13);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Mixin13).apply(this, arguments));
    }

    _createClass(Mixin13, [{
      key: "createdCallback",
      value: function createdCallback() {
        if (_get(Object.getPrototypeOf(Mixin13.prototype), "createdCallback", this)) {
          _get(Object.getPrototypeOf(Mixin13.prototype), "createdCallback", this).call(this);
        }
      }
    }, {
      key: "Mixin13_Method_1",
      value: function Mixin13_Method_1(a, b) {
        return a + b;
      }
    }, {
      key: "Mixin13_Method_2",
      value: function Mixin13_Method_2(a, b) {
        return a + b;
      }
    }]);

    return Mixin13;
  }(base);

  return Mixin13;
};

},{}],7:[function(require,module,exports){
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
  var Mixin14 = function (_base) {
    _inherits(Mixin14, _base);

    function Mixin14() {
      _classCallCheck(this, Mixin14);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Mixin14).apply(this, arguments));
    }

    _createClass(Mixin14, [{
      key: "createdCallback",
      value: function createdCallback() {
        if (_get(Object.getPrototypeOf(Mixin14.prototype), "createdCallback", this)) {
          _get(Object.getPrototypeOf(Mixin14.prototype), "createdCallback", this).call(this);
        }
      }
    }, {
      key: "Mixin14_Method_1",
      value: function Mixin14_Method_1(a, b) {
        return a + b;
      }
    }, {
      key: "Mixin14_Method_2",
      value: function Mixin14_Method_2(a, b) {
        return a + b;
      }
    }]);

    return Mixin14;
  }(base);

  return Mixin14;
};

},{}],8:[function(require,module,exports){
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
  var Mixin15 = function (_base) {
    _inherits(Mixin15, _base);

    function Mixin15() {
      _classCallCheck(this, Mixin15);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Mixin15).apply(this, arguments));
    }

    _createClass(Mixin15, [{
      key: "createdCallback",
      value: function createdCallback() {
        if (_get(Object.getPrototypeOf(Mixin15.prototype), "createdCallback", this)) {
          _get(Object.getPrototypeOf(Mixin15.prototype), "createdCallback", this).call(this);
        }
      }
    }, {
      key: "Mixin15_Method_1",
      value: function Mixin15_Method_1(a, b) {
        return a + b;
      }
    }, {
      key: "Mixin15_Method_2",
      value: function Mixin15_Method_2(a, b) {
        return a + b;
      }
    }]);

    return Mixin15;
  }(base);

  return Mixin15;
};

},{}],9:[function(require,module,exports){
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
  var Mixin16 = function (_base) {
    _inherits(Mixin16, _base);

    function Mixin16() {
      _classCallCheck(this, Mixin16);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Mixin16).apply(this, arguments));
    }

    _createClass(Mixin16, [{
      key: "createdCallback",
      value: function createdCallback() {
        if (_get(Object.getPrototypeOf(Mixin16.prototype), "createdCallback", this)) {
          _get(Object.getPrototypeOf(Mixin16.prototype), "createdCallback", this).call(this);
        }
      }
    }, {
      key: "Mixin16_Method_1",
      value: function Mixin16_Method_1(a, b) {
        return a + b;
      }
    }, {
      key: "Mixin16_Method_2",
      value: function Mixin16_Method_2(a, b) {
        return a + b;
      }
    }]);

    return Mixin16;
  }(base);

  return Mixin16;
};

},{}],10:[function(require,module,exports){
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
  var Mixin17 = function (_base) {
    _inherits(Mixin17, _base);

    function Mixin17() {
      _classCallCheck(this, Mixin17);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Mixin17).apply(this, arguments));
    }

    _createClass(Mixin17, [{
      key: "createdCallback",
      value: function createdCallback() {
        if (_get(Object.getPrototypeOf(Mixin17.prototype), "createdCallback", this)) {
          _get(Object.getPrototypeOf(Mixin17.prototype), "createdCallback", this).call(this);
        }
      }
    }, {
      key: "Mixin17_Method_1",
      value: function Mixin17_Method_1(a, b) {
        return a + b;
      }
    }, {
      key: "Mixin17_Method_2",
      value: function Mixin17_Method_2(a, b) {
        return a + b;
      }
    }]);

    return Mixin17;
  }(base);

  return Mixin17;
};

},{}],11:[function(require,module,exports){
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
  var Mixin18 = function (_base) {
    _inherits(Mixin18, _base);

    function Mixin18() {
      _classCallCheck(this, Mixin18);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Mixin18).apply(this, arguments));
    }

    _createClass(Mixin18, [{
      key: "createdCallback",
      value: function createdCallback() {
        if (_get(Object.getPrototypeOf(Mixin18.prototype), "createdCallback", this)) {
          _get(Object.getPrototypeOf(Mixin18.prototype), "createdCallback", this).call(this);
        }
      }
    }, {
      key: "Mixin18_Method_1",
      value: function Mixin18_Method_1(a, b) {
        return a + b;
      }
    }, {
      key: "Mixin18_Method_2",
      value: function Mixin18_Method_2(a, b) {
        return a + b;
      }
    }]);

    return Mixin18;
  }(base);

  return Mixin18;
};

},{}],12:[function(require,module,exports){
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
  var Mixin19 = function (_base) {
    _inherits(Mixin19, _base);

    function Mixin19() {
      _classCallCheck(this, Mixin19);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Mixin19).apply(this, arguments));
    }

    _createClass(Mixin19, [{
      key: "createdCallback",
      value: function createdCallback() {
        if (_get(Object.getPrototypeOf(Mixin19.prototype), "createdCallback", this)) {
          _get(Object.getPrototypeOf(Mixin19.prototype), "createdCallback", this).call(this);
        }
      }
    }, {
      key: "Mixin19_Method_1",
      value: function Mixin19_Method_1(a, b) {
        return a + b;
      }
    }, {
      key: "Mixin19_Method_2",
      value: function Mixin19_Method_2(a, b) {
        return a + b;
      }
    }]);

    return Mixin19;
  }(base);

  return Mixin19;
};

},{}],13:[function(require,module,exports){
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
  var Mixin2 = function (_base) {
    _inherits(Mixin2, _base);

    function Mixin2() {
      _classCallCheck(this, Mixin2);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Mixin2).apply(this, arguments));
    }

    _createClass(Mixin2, [{
      key: "createdCallback",
      value: function createdCallback() {
        if (_get(Object.getPrototypeOf(Mixin2.prototype), "createdCallback", this)) {
          _get(Object.getPrototypeOf(Mixin2.prototype), "createdCallback", this).call(this);
        }
      }
    }, {
      key: "Mixin2_Method_1",
      value: function Mixin2_Method_1(a, b) {
        return a + b;
      }
    }, {
      key: "Mixin2_Method_2",
      value: function Mixin2_Method_2(a, b) {
        return a + b;
      }
    }]);

    return Mixin2;
  }(base);

  return Mixin2;
};

},{}],14:[function(require,module,exports){
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
  var Mixin20 = function (_base) {
    _inherits(Mixin20, _base);

    function Mixin20() {
      _classCallCheck(this, Mixin20);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Mixin20).apply(this, arguments));
    }

    _createClass(Mixin20, [{
      key: "createdCallback",
      value: function createdCallback() {
        if (_get(Object.getPrototypeOf(Mixin20.prototype), "createdCallback", this)) {
          _get(Object.getPrototypeOf(Mixin20.prototype), "createdCallback", this).call(this);
        }
      }
    }, {
      key: "Mixin20_Method_1",
      value: function Mixin20_Method_1(a, b) {
        return a + b;
      }
    }, {
      key: "Mixin20_Method_2",
      value: function Mixin20_Method_2(a, b) {
        return a + b;
      }
    }]);

    return Mixin20;
  }(base);

  return Mixin20;
};

},{}],15:[function(require,module,exports){
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
  var Mixin3 = function (_base) {
    _inherits(Mixin3, _base);

    function Mixin3() {
      _classCallCheck(this, Mixin3);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Mixin3).apply(this, arguments));
    }

    _createClass(Mixin3, [{
      key: "createdCallback",
      value: function createdCallback() {
        if (_get(Object.getPrototypeOf(Mixin3.prototype), "createdCallback", this)) {
          _get(Object.getPrototypeOf(Mixin3.prototype), "createdCallback", this).call(this);
        }
      }
    }, {
      key: "Mixin3_Method_1",
      value: function Mixin3_Method_1(a, b) {
        return a + b;
      }
    }, {
      key: "Mixin3_Method_2",
      value: function Mixin3_Method_2(a, b) {
        return a + b;
      }
    }]);

    return Mixin3;
  }(base);

  return Mixin3;
};

},{}],16:[function(require,module,exports){
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
  var Mixin4 = function (_base) {
    _inherits(Mixin4, _base);

    function Mixin4() {
      _classCallCheck(this, Mixin4);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Mixin4).apply(this, arguments));
    }

    _createClass(Mixin4, [{
      key: "createdCallback",
      value: function createdCallback() {
        if (_get(Object.getPrototypeOf(Mixin4.prototype), "createdCallback", this)) {
          _get(Object.getPrototypeOf(Mixin4.prototype), "createdCallback", this).call(this);
        }
      }
    }, {
      key: "Mixin4_Method_1",
      value: function Mixin4_Method_1(a, b) {
        return a + b;
      }
    }, {
      key: "Mixin4_Method_2",
      value: function Mixin4_Method_2(a, b) {
        return a + b;
      }
    }]);

    return Mixin4;
  }(base);

  return Mixin4;
};

},{}],17:[function(require,module,exports){
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
  var Mixin5 = function (_base) {
    _inherits(Mixin5, _base);

    function Mixin5() {
      _classCallCheck(this, Mixin5);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Mixin5).apply(this, arguments));
    }

    _createClass(Mixin5, [{
      key: "createdCallback",
      value: function createdCallback() {
        if (_get(Object.getPrototypeOf(Mixin5.prototype), "createdCallback", this)) {
          _get(Object.getPrototypeOf(Mixin5.prototype), "createdCallback", this).call(this);
        }
      }
    }, {
      key: "Mixin5_Method_1",
      value: function Mixin5_Method_1(a, b) {
        return a + b;
      }
    }, {
      key: "Mixin5_Method_2",
      value: function Mixin5_Method_2(a, b) {
        return a + b;
      }
    }]);

    return Mixin5;
  }(base);

  return Mixin5;
};

},{}],18:[function(require,module,exports){
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
  var Mixin6 = function (_base) {
    _inherits(Mixin6, _base);

    function Mixin6() {
      _classCallCheck(this, Mixin6);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Mixin6).apply(this, arguments));
    }

    _createClass(Mixin6, [{
      key: "createdCallback",
      value: function createdCallback() {
        if (_get(Object.getPrototypeOf(Mixin6.prototype), "createdCallback", this)) {
          _get(Object.getPrototypeOf(Mixin6.prototype), "createdCallback", this).call(this);
        }
      }
    }, {
      key: "Mixin6_Method_1",
      value: function Mixin6_Method_1(a, b) {
        return a + b;
      }
    }, {
      key: "Mixin6_Method_2",
      value: function Mixin6_Method_2(a, b) {
        return a + b;
      }
    }]);

    return Mixin6;
  }(base);

  return Mixin6;
};

},{}],19:[function(require,module,exports){
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
  var Mixin7 = function (_base) {
    _inherits(Mixin7, _base);

    function Mixin7() {
      _classCallCheck(this, Mixin7);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Mixin7).apply(this, arguments));
    }

    _createClass(Mixin7, [{
      key: "createdCallback",
      value: function createdCallback() {
        if (_get(Object.getPrototypeOf(Mixin7.prototype), "createdCallback", this)) {
          _get(Object.getPrototypeOf(Mixin7.prototype), "createdCallback", this).call(this);
        }
      }
    }, {
      key: "Mixin7_Method_1",
      value: function Mixin7_Method_1(a, b) {
        return a + b;
      }
    }, {
      key: "Mixin7_Method_2",
      value: function Mixin7_Method_2(a, b) {
        return a + b;
      }
    }]);

    return Mixin7;
  }(base);

  return Mixin7;
};

},{}],20:[function(require,module,exports){
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
  var Mixin8 = function (_base) {
    _inherits(Mixin8, _base);

    function Mixin8() {
      _classCallCheck(this, Mixin8);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Mixin8).apply(this, arguments));
    }

    _createClass(Mixin8, [{
      key: "createdCallback",
      value: function createdCallback() {
        if (_get(Object.getPrototypeOf(Mixin8.prototype), "createdCallback", this)) {
          _get(Object.getPrototypeOf(Mixin8.prototype), "createdCallback", this).call(this);
        }
      }
    }, {
      key: "Mixin8_Method_1",
      value: function Mixin8_Method_1(a, b) {
        return a + b;
      }
    }, {
      key: "Mixin8_Method_2",
      value: function Mixin8_Method_2(a, b) {
        return a + b;
      }
    }]);

    return Mixin8;
  }(base);

  return Mixin8;
};

},{}],21:[function(require,module,exports){
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
  var Mixin9 = function (_base) {
    _inherits(Mixin9, _base);

    function Mixin9() {
      _classCallCheck(this, Mixin9);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Mixin9).apply(this, arguments));
    }

    _createClass(Mixin9, [{
      key: "createdCallback",
      value: function createdCallback() {
        if (_get(Object.getPrototypeOf(Mixin9.prototype), "createdCallback", this)) {
          _get(Object.getPrototypeOf(Mixin9.prototype), "createdCallback", this).call(this);
        }
      }
    }, {
      key: "Mixin9_Method_1",
      value: function Mixin9_Method_1(a, b) {
        return a + b;
      }
    }, {
      key: "Mixin9_Method_2",
      value: function Mixin9_Method_2(a, b) {
        return a + b;
      }
    }]);

    return Mixin9;
  }(base);

  return Mixin9;
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy1wYWNrYWdlcy9qcy1jb21wb25lbnQtbWl4aW5zL2VzNWdsb2JhbHMuanMiLCJqcy1wYWNrYWdlcy9qcy1jb21wb25lbnQtbWl4aW5zL3NyYy9NaXhpbjEuanMiLCJqcy1wYWNrYWdlcy9qcy1jb21wb25lbnQtbWl4aW5zL3NyYy9NaXhpbjEwLmpzIiwianMtcGFja2FnZXMvanMtY29tcG9uZW50LW1peGlucy9zcmMvTWl4aW4xMS5qcyIsImpzLXBhY2thZ2VzL2pzLWNvbXBvbmVudC1taXhpbnMvc3JjL01peGluMTIuanMiLCJqcy1wYWNrYWdlcy9qcy1jb21wb25lbnQtbWl4aW5zL3NyYy9NaXhpbjEzLmpzIiwianMtcGFja2FnZXMvanMtY29tcG9uZW50LW1peGlucy9zcmMvTWl4aW4xNC5qcyIsImpzLXBhY2thZ2VzL2pzLWNvbXBvbmVudC1taXhpbnMvc3JjL01peGluMTUuanMiLCJqcy1wYWNrYWdlcy9qcy1jb21wb25lbnQtbWl4aW5zL3NyYy9NaXhpbjE2LmpzIiwianMtcGFja2FnZXMvanMtY29tcG9uZW50LW1peGlucy9zcmMvTWl4aW4xNy5qcyIsImpzLXBhY2thZ2VzL2pzLWNvbXBvbmVudC1taXhpbnMvc3JjL01peGluMTguanMiLCJqcy1wYWNrYWdlcy9qcy1jb21wb25lbnQtbWl4aW5zL3NyYy9NaXhpbjE5LmpzIiwianMtcGFja2FnZXMvanMtY29tcG9uZW50LW1peGlucy9zcmMvTWl4aW4yLmpzIiwianMtcGFja2FnZXMvanMtY29tcG9uZW50LW1peGlucy9zcmMvTWl4aW4yMC5qcyIsImpzLXBhY2thZ2VzL2pzLWNvbXBvbmVudC1taXhpbnMvc3JjL01peGluMy5qcyIsImpzLXBhY2thZ2VzL2pzLWNvbXBvbmVudC1taXhpbnMvc3JjL01peGluNC5qcyIsImpzLXBhY2thZ2VzL2pzLWNvbXBvbmVudC1taXhpbnMvc3JjL01peGluNS5qcyIsImpzLXBhY2thZ2VzL2pzLWNvbXBvbmVudC1taXhpbnMvc3JjL01peGluNi5qcyIsImpzLXBhY2thZ2VzL2pzLWNvbXBvbmVudC1taXhpbnMvc3JjL01peGluNy5qcyIsImpzLXBhY2thZ2VzL2pzLWNvbXBvbmVudC1taXhpbnMvc3JjL01peGluOC5qcyIsImpzLXBhY2thZ2VzL2pzLWNvbXBvbmVudC1taXhpbnMvc3JjL01peGluOS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDS0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFFQSxJQUFJLENBQUMsT0FBTyxLQUFaLEVBQW1CO0FBQ2pCLFNBQU8sS0FBUCxHQUFlLEVBQWY7QUFDRDs7QUFFRCxPQUFPLEtBQVAsQ0FBYSxNQUFiO0FBQ0EsT0FBTyxLQUFQLENBQWEsTUFBYjtBQUNBLE9BQU8sS0FBUCxDQUFhLE1BQWI7QUFDQSxPQUFPLEtBQVAsQ0FBYSxNQUFiO0FBQ0EsT0FBTyxLQUFQLENBQWEsTUFBYjtBQUNBLE9BQU8sS0FBUCxDQUFhLE1BQWI7QUFDQSxPQUFPLEtBQVAsQ0FBYSxNQUFiO0FBQ0EsT0FBTyxLQUFQLENBQWEsTUFBYjtBQUNBLE9BQU8sS0FBUCxDQUFhLE1BQWI7QUFDQSxPQUFPLEtBQVAsQ0FBYSxPQUFiO0FBQ0EsT0FBTyxLQUFQLENBQWEsT0FBYjtBQUNBLE9BQU8sS0FBUCxDQUFhLE9BQWI7QUFDQSxPQUFPLEtBQVAsQ0FBYSxPQUFiO0FBQ0EsT0FBTyxLQUFQLENBQWEsT0FBYjtBQUNBLE9BQU8sS0FBUCxDQUFhLE9BQWI7QUFDQSxPQUFPLEtBQVAsQ0FBYSxPQUFiO0FBQ0EsT0FBTyxLQUFQLENBQWEsT0FBYjtBQUNBLE9BQU8sS0FBUCxDQUFhLE9BQWI7QUFDQSxP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d0NBSUg7QUFDaEIsb0ZBQTJCO0FBQUU7QUFBMEI7QUFDeEQ7QUFOb0I7QUFBQTtBQUFBLHNDQVFMLENBUkssRUFRRixDQVJFLEVBUUM7QUFDcEIsZUFBTyxJQUFJLENBQVg7QUFDRDtBQVZvQjtBQUFBO0FBQUEsc0NBWUwsQ0FaSyxFQVlGLENBWkUsRUFZQztBQUNwQixlQUFPLElBQUksQ0FBWDtBQUNEO0FBZG9COztBQUFBO0FBQUEsSUFFRixJQUZFOztBQWtCdkIsU0FBTyxNQUFQO0FBQ0QsQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKlxuICogVGhpcyBmaWxlIGlzIHRyYW5zcGlsZWQgdG8gY3JlYXRlIGFuIEVTNS1jb21wYXRpYmxlIGRpc3RyaWJ1dGlvbiBpbiB3aGljaFxuICogdGhlIHBhY2thZ2UncyBtYWluIGZlYXR1cmUocykgYXJlIGF2YWlsYWJsZSB2aWEgdGhlIHdpbmRvdy5CYXNpYyBnbG9iYWwuXG4gKi9cblxuaW1wb3J0IE1peGluMSBmcm9tICcuL3NyYy9NaXhpbjEnO1xuaW1wb3J0IE1peGluMiBmcm9tICcuL3NyYy9NaXhpbjInO1xuaW1wb3J0IE1peGluMyBmcm9tICcuL3NyYy9NaXhpbjMnO1xuaW1wb3J0IE1peGluNCBmcm9tICcuL3NyYy9NaXhpbjQnO1xuaW1wb3J0IE1peGluNSBmcm9tICcuL3NyYy9NaXhpbjUnO1xuaW1wb3J0IE1peGluNiBmcm9tICcuL3NyYy9NaXhpbjYnO1xuaW1wb3J0IE1peGluNyBmcm9tICcuL3NyYy9NaXhpbjcnO1xuaW1wb3J0IE1peGluOCBmcm9tICcuL3NyYy9NaXhpbjgnO1xuaW1wb3J0IE1peGluOSBmcm9tICcuL3NyYy9NaXhpbjknO1xuaW1wb3J0IE1peGluMTAgZnJvbSAnLi9zcmMvTWl4aW4xMCc7XG5pbXBvcnQgTWl4aW4xMSBmcm9tICcuL3NyYy9NaXhpbjExJztcbmltcG9ydCBNaXhpbjEyIGZyb20gJy4vc3JjL01peGluMTInO1xuaW1wb3J0IE1peGluMTMgZnJvbSAnLi9zcmMvTWl4aW4xMyc7XG5pbXBvcnQgTWl4aW4xNCBmcm9tICcuL3NyYy9NaXhpbjE0JztcbmltcG9ydCBNaXhpbjE1IGZyb20gJy4vc3JjL01peGluMTUnO1xuaW1wb3J0IE1peGluMTYgZnJvbSAnLi9zcmMvTWl4aW4xNic7XG5pbXBvcnQgTWl4aW4xNyBmcm9tICcuL3NyYy9NaXhpbjE3JztcbmltcG9ydCBNaXhpbjE4IGZyb20gJy4vc3JjL01peGluMTgnO1xuaW1wb3J0IE1peGluMTkgZnJvbSAnLi9zcmMvTWl4aW4xOSc7XG5pbXBvcnQgTWl4aW4yMCBmcm9tICcuL3NyYy9NaXhpbjIwJztcblxuaWYgKCF3aW5kb3cuQmFzaWMpIHtcbiAgd2luZG93LkJhc2ljID0ge307XG59XG5cbndpbmRvdy5CYXNpYy5NaXhpbjEgPSBNaXhpbjE7XG53aW5kb3cuQmFzaWMuTWl4aW4yID0gTWl4aW4yO1xud2luZG93LkJhc2ljLk1peGluMyA9IE1peGluMztcbndpbmRvdy5CYXNpYy5NaXhpbjQgPSBNaXhpbjQ7XG53aW5kb3cuQmFzaWMuTWl4aW41ID0gTWl4aW41O1xud2luZG93LkJhc2ljLk1peGluNiA9IE1peGluNjtcbndpbmRvdy5CYXNpYy5NaXhpbjcgPSBNaXhpbjc7XG53aW5kb3cuQmFzaWMuTWl4aW44ID0gTWl4aW44O1xud2luZG93LkJhc2ljLk1peGluOSA9IE1peGluOTtcbndpbmRvdy5CYXNpYy5NaXhpbjEwID0gTWl4aW4xMDtcbndpbmRvdy5CYXNpYy5NaXhpbjExID0gTWl4aW4xMTtcbndpbmRvdy5CYXNpYy5NaXhpbjEyID0gTWl4aW4xMjtcbndpbmRvdy5CYXNpYy5NaXhpbjEzID0gTWl4aW4xMztcbndpbmRvdy5CYXNpYy5NaXhpbjE0ID0gTWl4aW4xNDtcbndpbmRvdy5CYXNpYy5NaXhpbjE1ID0gTWl4aW4xNTtcbndpbmRvdy5CYXNpYy5NaXhpbjE2ID0gTWl4aW4xNjtcbndpbmRvdy5CYXNpYy5NaXhpbjE3ID0gTWl4aW4xNztcbndpbmRvdy5CYXNpYy5NaXhpbjE4ID0gTWl4aW4xODtcbndpbmRvdy5CYXNpYy5NaXhpbjE5ID0gTWl4aW4xOTtcbndpbmRvdy5CYXNpYy5NaXhpbjEwID0gTWl4aW4yMDtcbiIsImV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgY2xhc3MgTWl4aW4xIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgfVxuXG4gICAgTWl4aW4xX01ldGhvZF8xKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgICBNaXhpbjFfTWV0aG9kXzIoYSwgYikge1xuICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIE1peGluMTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIGNsYXNzIE1peGluMTAgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICB9XG5cbiAgICBNaXhpbjEwX01ldGhvZF8xKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgICBNaXhpbjEwX01ldGhvZF8yKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBNaXhpbjEwO1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgY2xhc3MgTWl4aW4xMSBleHRlbmRzIGJhc2Uge1xuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgIH1cblxuICAgIE1peGluMTFfTWV0aG9kXzEoYSwgYikge1xuICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIH1cblxuICAgIE1peGluMTFfTWV0aG9kXzIoYSwgYikge1xuICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIE1peGluMTE7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICBjbGFzcyBNaXhpbjEyIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgfVxuXG4gICAgTWl4aW4xMl9NZXRob2RfMShhLCBiKSB7XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgfVxuXG4gICAgTWl4aW4xMl9NZXRob2RfMihhLCBiKSB7XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gTWl4aW4xMjtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIGNsYXNzIE1peGluMTMgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICB9XG5cbiAgICBNaXhpbjEzX01ldGhvZF8xKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgICBNaXhpbjEzX01ldGhvZF8yKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBNaXhpbjEzO1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgY2xhc3MgTWl4aW4xNCBleHRlbmRzIGJhc2Uge1xuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgIH1cblxuICAgIE1peGluMTRfTWV0aG9kXzEoYSwgYikge1xuICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIH1cblxuICAgIE1peGluMTRfTWV0aG9kXzIoYSwgYikge1xuICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIE1peGluMTQ7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICBjbGFzcyBNaXhpbjE1IGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgfVxuXG4gICAgTWl4aW4xNV9NZXRob2RfMShhLCBiKSB7XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgfVxuXG4gICAgTWl4aW4xNV9NZXRob2RfMihhLCBiKSB7XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gTWl4aW4xNTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIGNsYXNzIE1peGluMTYgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICB9XG5cbiAgICBNaXhpbjE2X01ldGhvZF8xKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgICBNaXhpbjE2X01ldGhvZF8yKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBNaXhpbjE2O1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgY2xhc3MgTWl4aW4xNyBleHRlbmRzIGJhc2Uge1xuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgIH1cblxuICAgIE1peGluMTdfTWV0aG9kXzEoYSwgYikge1xuICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIH1cblxuICAgIE1peGluMTdfTWV0aG9kXzIoYSwgYikge1xuICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIE1peGluMTc7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICBjbGFzcyBNaXhpbjE4IGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgfVxuXG4gICAgTWl4aW4xOF9NZXRob2RfMShhLCBiKSB7XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgfVxuXG4gICAgTWl4aW4xOF9NZXRob2RfMihhLCBiKSB7XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gTWl4aW4xODtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIGNsYXNzIE1peGluMTkgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICB9XG5cbiAgICBNaXhpbjE5X01ldGhvZF8xKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgICBNaXhpbjE5X01ldGhvZF8yKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBNaXhpbjE5O1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgY2xhc3MgTWl4aW4yIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgfVxuXG4gICAgTWl4aW4yX01ldGhvZF8xKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgICBNaXhpbjJfTWV0aG9kXzIoYSwgYikge1xuICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIE1peGluMjtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIGNsYXNzIE1peGluMjAgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICB9XG5cbiAgICBNaXhpbjIwX01ldGhvZF8xKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgICBNaXhpbjIwX01ldGhvZF8yKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBNaXhpbjIwO1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgY2xhc3MgTWl4aW4zIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgfVxuXG4gICAgTWl4aW4zX01ldGhvZF8xKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgICBNaXhpbjNfTWV0aG9kXzIoYSwgYikge1xuICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIE1peGluMztcbn07XG4iLCJleHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIGNsYXNzIE1peGluNCBleHRlbmRzIGJhc2Uge1xuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgIH1cblxuICAgIE1peGluNF9NZXRob2RfMShhLCBiKSB7XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgfVxuXG4gICAgTWl4aW40X01ldGhvZF8yKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBNaXhpbjQ7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICBjbGFzcyBNaXhpbjUgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICB9XG5cbiAgICBNaXhpbjVfTWV0aG9kXzEoYSwgYikge1xuICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIH1cblxuICAgIE1peGluNV9NZXRob2RfMihhLCBiKSB7XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gTWl4aW41O1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgY2xhc3MgTWl4aW42IGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgfVxuXG4gICAgTWl4aW42X01ldGhvZF8xKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgICBNaXhpbjZfTWV0aG9kXzIoYSwgYikge1xuICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIE1peGluNjtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIGNsYXNzIE1peGluNyBleHRlbmRzIGJhc2Uge1xuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgIH1cblxuICAgIE1peGluN19NZXRob2RfMShhLCBiKSB7XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgfVxuXG4gICAgTWl4aW43X01ldGhvZF8yKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBNaXhpbjc7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICBjbGFzcyBNaXhpbjggZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICB9XG5cbiAgICBNaXhpbjhfTWV0aG9kXzEoYSwgYikge1xuICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIH1cblxuICAgIE1peGluOF9NZXRob2RfMihhLCBiKSB7XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gTWl4aW44O1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgY2xhc3MgTWl4aW45IGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgfVxuXG4gICAgTWl4aW45X01ldGhvZF8xKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgICBNaXhpbjlfTWV0aG9kXzIoYSwgYikge1xuICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIE1peGluOTtcbn07XG4iXX0=
