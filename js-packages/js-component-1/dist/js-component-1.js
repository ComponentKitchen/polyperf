(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Composable = require('../../js-component-mixins/src/Composable');

var _Composable2 = _interopRequireDefault(_Composable);

var _Mixin = require('../../js-component-mixins/src/Mixin1');

var _Mixin2 = _interopRequireDefault(_Mixin);

var _Mixin3 = require('../../js-component-mixins/src/Mixin2');

var _Mixin4 = _interopRequireDefault(_Mixin3);

var _Mixin5 = require('../../js-component-mixins/src/Mixin3');

var _Mixin6 = _interopRequireDefault(_Mixin5);

var _Mixin7 = require('../../js-component-mixins/src/Mixin4');

var _Mixin8 = _interopRequireDefault(_Mixin7);

var _Mixin9 = require('../../js-component-mixins/src/Mixin5');

var _Mixin10 = _interopRequireDefault(_Mixin9);

var _Mixin11 = require('../../js-component-mixins/src/Mixin6');

var _Mixin12 = _interopRequireDefault(_Mixin11);

var _Mixin13 = require('../../js-component-mixins/src/Mixin7');

var _Mixin14 = _interopRequireDefault(_Mixin13);

var _Mixin15 = require('../../js-component-mixins/src/Mixin8');

var _Mixin16 = _interopRequireDefault(_Mixin15);

var _Mixin17 = require('../../js-component-mixins/src/Mixin9');

var _Mixin18 = _interopRequireDefault(_Mixin17);

var _Mixin19 = require('../../js-component-mixins/src/Mixin10');

var _Mixin20 = _interopRequireDefault(_Mixin19);

var _Mixin21 = require('../../js-component-mixins/src/Mixin11');

var _Mixin22 = _interopRequireDefault(_Mixin21);

var _Mixin23 = require('../../js-component-mixins/src/Mixin12');

var _Mixin24 = _interopRequireDefault(_Mixin23);

var _Mixin25 = require('../../js-component-mixins/src/Mixin13');

var _Mixin26 = _interopRequireDefault(_Mixin25);

var _Mixin27 = require('../../js-component-mixins/src/Mixin14');

var _Mixin28 = _interopRequireDefault(_Mixin27);

var _Mixin29 = require('../../js-component-mixins/src/Mixin15');

var _Mixin30 = _interopRequireDefault(_Mixin29);

var _Mixin31 = require('../../js-component-mixins/src/Mixin16');

var _Mixin32 = _interopRequireDefault(_Mixin31);

var _Mixin33 = require('../../js-component-mixins/src/Mixin17');

var _Mixin34 = _interopRequireDefault(_Mixin33);

var _Mixin35 = require('../../js-component-mixins/src/Mixin18');

var _Mixin36 = _interopRequireDefault(_Mixin35);

var _Mixin37 = require('../../js-component-mixins/src/Mixin19');

var _Mixin38 = _interopRequireDefault(_Mixin37);

var _Mixin39 = require('../../js-component-mixins/src/Mixin20');

var _Mixin40 = _interopRequireDefault(_Mixin39);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component1 = function (_Composable$compose) {
  _inherits(Component1, _Composable$compose);

  function Component1() {
    _classCallCheck(this, Component1);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Component1).apply(this, arguments));
  }

  _createClass(Component1, [{
    key: 'createdCallback',
    value: function createdCallback() {
      if (_get(Object.getPrototypeOf(Component1.prototype), 'createdCallback', this)) {
        _get(Object.getPrototypeOf(Component1.prototype), 'createdCallback', this).call(this);
      }
    }
  }]);

  return Component1;
}((0, _Composable2.default)(HTMLElement).compose(_Mixin2.default, _Mixin4.default, _Mixin6.default, _Mixin8.default, _Mixin10.default, _Mixin12.default, _Mixin14.default, _Mixin16.default, _Mixin18.default, _Mixin20.default, _Mixin22.default, _Mixin24.default, _Mixin26.default, _Mixin28.default, _Mixin30.default, _Mixin32.default, _Mixin34.default, _Mixin36.default, _Mixin38.default, _Mixin40.default));

document.registerElement('js-component-1', Component1);
exports.default = Component1;

},{"../../js-component-mixins/src/Composable":2,"../../js-component-mixins/src/Mixin1":3,"../../js-component-mixins/src/Mixin10":4,"../../js-component-mixins/src/Mixin11":5,"../../js-component-mixins/src/Mixin12":6,"../../js-component-mixins/src/Mixin13":7,"../../js-component-mixins/src/Mixin14":8,"../../js-component-mixins/src/Mixin15":9,"../../js-component-mixins/src/Mixin16":10,"../../js-component-mixins/src/Mixin17":11,"../../js-component-mixins/src/Mixin18":12,"../../js-component-mixins/src/Mixin19":13,"../../js-component-mixins/src/Mixin2":14,"../../js-component-mixins/src/Mixin20":15,"../../js-component-mixins/src/Mixin3":16,"../../js-component-mixins/src/Mixin4":17,"../../js-component-mixins/src/Mixin5":18,"../../js-component-mixins/src/Mixin6":19,"../../js-component-mixins/src/Mixin7":20,"../../js-component-mixins/src/Mixin8":21,"../../js-component-mixins/src/Mixin9":22}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Exported function extends a base class with Composable. */

exports.default = function (base) {

  /**
   * Mixin to make a class more easily composable with other mixins.
   *
   * This mixin contributes a `compose` method that applies a set of mixin
   * functions and returns the resulting new class. This sugar can make the
   * application of many mixins at once easier to read.
   */

  var Composable = function (_base) {
    _inherits(Composable, _base);

    function Composable() {
      _classCallCheck(this, Composable);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Composable).apply(this, arguments));
    }

    _createClass(Composable, null, [{
      key: 'compose',


      /**
       * Apply a set of mixin functions or mixin objects to the present class and
       * return the new class.
       *
       * Instead of writing:
       *
       *     let MyClass = Mixin1(Mixin2(Mixin3(Mixin4(Mixin5(BaseClass)))));
       *
       * You can write:
       *
       *     let MyClass = Composable(BaseClass).compose(
       *       Mixin1,
       *       Mixin2,
       *       Mixin3,
       *       Mixin4,
       *       Mixin5
       *     );
       *
       * This function can also take mixin objects. A mixin object is just a
       * shorthand for a mixin function that creates a new subclass with the given
       * members. The mixin object's members are *not* copied directly onto the
       * prototype of the base class, as with traditional mixins.
       *
       * In addition to providing syntactic sugar, this mixin can be used to
       * define a class in ES5, which lacks ES6's `class` keyword.
       *
       * @param {...mixins} mixins - A set of mixin functions or objects to apply.
       */
      value: function compose() {
        for (var _len = arguments.length, mixins = Array(_len), _key = 0; _key < _len; _key++) {
          mixins[_key] = arguments[_key];
        }

        // We create a new subclass for each mixin in turn. The result becomes
        // the base class extended by any subsequent mixins. It turns out that
        // we can use Array.reduce() to concisely express this, using the current
        // object as the seed for reduce().
        return mixins.reduce(composeClass, this);
      }
    }]);

    return Composable;
  }(base);

  return Composable;
};

// Properties defined by Object that we don't want to mixin.


var NON_MIXABLE_OBJECT_PROPERTIES = ['constructor'];

/*
 * Apply the mixin to the given base class to return a new class.
 * The mixin can either be a function that returns the modified class, or a
 * plain object whose members will be copied to the new class' prototype.
 */
function composeClass(base, mixin) {
  if (typeof mixin === 'function') {
    // Mixin function
    return mixin(base);
  } else {
    // Mixin object

    var Subclass = function (_base2) {
      _inherits(Subclass, _base2);

      function Subclass() {
        _classCallCheck(this, Subclass);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Subclass).apply(this, arguments));
      }

      return Subclass;
    }(base);

    copyOwnProperties(mixin, Subclass.prototype, NON_MIXABLE_OBJECT_PROPERTIES);
    return Subclass;
  }
}

/*
 * Copy the given properties/methods to the target.
 * Return the updated target.
 */
function copyOwnProperties(source, target) {
  var ignorePropertyNames = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];

  Object.getOwnPropertyNames(source).forEach(function (name) {
    if (ignorePropertyNames.indexOf(name) < 0) {
      var descriptor = Object.getOwnPropertyDescriptor(source, name);
      Object.defineProperty(target, name, descriptor);
    }
  });
  return target;
}

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

},{}],22:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy1wYWNrYWdlcy9qcy1jb21wb25lbnQtMS9zcmMvQ29tcG9uZW50MS5qcyIsImpzLXBhY2thZ2VzL2pzLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbXBvc2FibGUuanMiLCJqcy1wYWNrYWdlcy9qcy1jb21wb25lbnQtbWl4aW5zL3NyYy9NaXhpbjEuanMiLCJqcy1wYWNrYWdlcy9qcy1jb21wb25lbnQtbWl4aW5zL3NyYy9NaXhpbjEwLmpzIiwianMtcGFja2FnZXMvanMtY29tcG9uZW50LW1peGlucy9zcmMvTWl4aW4xMS5qcyIsImpzLXBhY2thZ2VzL2pzLWNvbXBvbmVudC1taXhpbnMvc3JjL01peGluMTIuanMiLCJqcy1wYWNrYWdlcy9qcy1jb21wb25lbnQtbWl4aW5zL3NyYy9NaXhpbjEzLmpzIiwianMtcGFja2FnZXMvanMtY29tcG9uZW50LW1peGlucy9zcmMvTWl4aW4xNC5qcyIsImpzLXBhY2thZ2VzL2pzLWNvbXBvbmVudC1taXhpbnMvc3JjL01peGluMTUuanMiLCJqcy1wYWNrYWdlcy9qcy1jb21wb25lbnQtbWl4aW5zL3NyYy9NaXhpbjE2LmpzIiwianMtcGFja2FnZXMvanMtY29tcG9uZW50LW1peGlucy9zcmMvTWl4aW4xNy5qcyIsImpzLXBhY2thZ2VzL2pzLWNvbXBvbmVudC1taXhpbnMvc3JjL01peGluMTguanMiLCJqcy1wYWNrYWdlcy9qcy1jb21wb25lbnQtbWl4aW5zL3NyYy9NaXhpbjE5LmpzIiwianMtcGFja2FnZXMvanMtY29tcG9uZW50LW1peGlucy9zcmMvTWl4aW4yLmpzIiwianMtcGFja2FnZXMvanMtY29tcG9uZW50LW1peGlucy9zcmMvTWl4aW4yMC5qcyIsImpzLXBhY2thZ2VzL2pzLWNvbXBvbmVudC1taXhpbnMvc3JjL01peGluMy5qcyIsImpzLXBhY2thZ2VzL2pzLWNvbXBvbmVudC1taXhpbnMvc3JjL01peGluNC5qcyIsImpzLXBhY2thZ2VzL2pzLWNvbXBvbmVudC1taXhpbnMvc3JjL01peGluNS5qcyIsImpzLXBhY2thZ2VzL2pzLWNvbXBvbmVudC1taXhpbnMvc3JjL01peGluNi5qcyIsImpzLXBhY2thZ2VzL2pzLWNvbXBvbmVudC1taXhpbnMvc3JjL01peGluNy5qcyIsImpzLXBhY2thZ2VzL2pzLWNvbXBvbmVudC1taXhpbnMvc3JjL01peGluOC5qcyIsImpzLXBhY2thZ2VzL2pzLWNvbXBvbmVudC1taXhpbnMvc3JjL01peGluOS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNLFU7Ozs7Ozs7Ozs7O3NDQXVCYztBQUNoQixzRkFBMkI7QUFBRTtBQUEwQjtBQUN4RDs7OztFQXpCc0IsMEJBQVcsV0FBWCxFQUF3QixPQUF4QixvVzs7QUE2QnpCLFNBQVMsZUFBVCxDQUF5QixnQkFBekIsRUFBMkMsVUFBM0M7a0JBQ2UsVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNuREEsVUFBQyxJQUFELEVBQVU7Ozs7Ozs7Ozs7QUFBQSxNQVNqQixVQVRpQjtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0NBdUNLO0FBQUEsMENBQVIsTUFBUTtBQUFSLGdCQUFRO0FBQUE7Ozs7OztBQUt4QixlQUFPLE9BQU8sTUFBUCxDQUFjLFlBQWQsRUFBNEIsSUFBNUIsQ0FBUDtBQUNEO0FBN0NvQjs7QUFBQTtBQUFBLElBU0UsSUFURjs7QUFpRHZCLFNBQU8sVUFBUDtBQUNELEM7Ozs7O0FBSUQsSUFBTSxnQ0FBZ0Ms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UkUsRUFRQztBQUNwQixlQUFPLElBQUksQ0FBWDtBQUNEO0FBVm9CO0FBQUE7QUFBQSxzQ0FZTCxDQVpLLEVBWUYsQ0FaRSxFQVlDO0FBQ3BCLGVBQU8sSUFBSSxDQUFYO0FBQ0Q7QUFkb0I7O0FBQUE7QUFBQSxJQUVGLElBRkU7O0FBa0J2QixTQUFPLE1BQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQ25CYyxVQUFDLElBQUQsRUFBVTtBQUFBLE1BRWpCLE1BRmlCO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSx3Q0FJSDtBQUNoQixvRkFBMkI7QUFBRTtBQUEwQjtBQUN4RDtBQU5vQjtBQUFBO0FBQUEsc0NBUUwsQ0FSSyxFQVFGLENBUkUsRUFRQztBQUNwQixlQUFPLElBQUksQ0FBWDtBQUNEO0FBVm9CO0FBQUE7QUFBQSxzQ0FZTCxDQVpLLEVBWUYsQ0FaRSxFQVlDO0FBQ3BCLGVBQU8sSUFBSSxDQUFYO0FBQ0Q7QUFkb0I7O0FBQUE7QUFBQSxJQUVGLElBRkU7O0FBa0J2QixTQUFPLE1BQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQ25CYyxVQUFDLElBQUQsRUFBVTtBQUFBLE1BRWpCLE1BRmlCO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSx3Q0FJSDtBQUNoQixvRkFBMkI7QUFBRTtBQUEwQjtBQUN4RDtBQU5vQjtBQUFBO0FBQUEsc0NBUUwsQ0FSSyxFQVFGLENBUkUsRUFRQztBQUNwQixlQUFPLElBQUksQ0FBWDtBQUNEO0FBVm9CO0FBQUE7QUFBQSxzQ0FZTCxDQVpLLEVBWUYsQ0FaRSxFQVlDO0FBQ3BCLGVBQU8sSUFBSSxDQUFYO0FBQ0Q7QUFkb0I7O0FBQUE7QUFBQSxJQUVGLElBRkU7O0FBa0J2QixTQUFPLE1BQVA7QUFDRCxDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBDb21wb3NhYmxlIGZyb20gJy4uLy4uL2pzLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbXBvc2FibGUnO1xuaW1wb3J0IE1peGluMSBmcm9tICcuLi8uLi9qcy1jb21wb25lbnQtbWl4aW5zL3NyYy9NaXhpbjEnO1xuaW1wb3J0IE1peGluMiBmcm9tICcuLi8uLi9qcy1jb21wb25lbnQtbWl4aW5zL3NyYy9NaXhpbjInO1xuaW1wb3J0IE1peGluMyBmcm9tICcuLi8uLi9qcy1jb21wb25lbnQtbWl4aW5zL3NyYy9NaXhpbjMnO1xuaW1wb3J0IE1peGluNCBmcm9tICcuLi8uLi9qcy1jb21wb25lbnQtbWl4aW5zL3NyYy9NaXhpbjQnO1xuaW1wb3J0IE1peGluNSBmcm9tICcuLi8uLi9qcy1jb21wb25lbnQtbWl4aW5zL3NyYy9NaXhpbjUnO1xuaW1wb3J0IE1peGluNiBmcm9tICcuLi8uLi9qcy1jb21wb25lbnQtbWl4aW5zL3NyYy9NaXhpbjYnO1xuaW1wb3J0IE1peGluNyBmcm9tICcuLi8uLi9qcy1jb21wb25lbnQtbWl4aW5zL3NyYy9NaXhpbjcnO1xuaW1wb3J0IE1peGluOCBmcm9tICcuLi8uLi9qcy1jb21wb25lbnQtbWl4aW5zL3NyYy9NaXhpbjgnO1xuaW1wb3J0IE1peGluOSBmcm9tICcuLi8uLi9qcy1jb21wb25lbnQtbWl4aW5zL3NyYy9NaXhpbjknO1xuaW1wb3J0IE1peGluMTAgZnJvbSAnLi4vLi4vanMtY29tcG9uZW50LW1peGlucy9zcmMvTWl4aW4xMCc7XG5pbXBvcnQgTWl4aW4xMSBmcm9tICcuLi8uLi9qcy1jb21wb25lbnQtbWl4aW5zL3NyYy9NaXhpbjExJztcbmltcG9ydCBNaXhpbjEyIGZyb20gJy4uLy4uL2pzLWNvbXBvbmVudC1taXhpbnMvc3JjL01peGluMTInO1xuaW1wb3J0IE1peGluMTMgZnJvbSAnLi4vLi4vanMtY29tcG9uZW50LW1peGlucy9zcmMvTWl4aW4xMyc7XG5pbXBvcnQgTWl4aW4xNCBmcm9tICcuLi8uLi9qcy1jb21wb25lbnQtbWl4aW5zL3NyYy9NaXhpbjE0JztcbmltcG9ydCBNaXhpbjE1IGZyb20gJy4uLy4uL2pzLWNvbXBvbmVudC1taXhpbnMvc3JjL01peGluMTUnO1xuaW1wb3J0IE1peGluMTYgZnJvbSAnLi4vLi4vanMtY29tcG9uZW50LW1peGlucy9zcmMvTWl4aW4xNic7XG5pbXBvcnQgTWl4aW4xNyBmcm9tICcuLi8uLi9qcy1jb21wb25lbnQtbWl4aW5zL3NyYy9NaXhpbjE3JztcbmltcG9ydCBNaXhpbjE4IGZyb20gJy4uLy4uL2pzLWNvbXBvbmVudC1taXhpbnMvc3JjL01peGluMTgnO1xuaW1wb3J0IE1peGluMTkgZnJvbSAnLi4vLi4vanMtY29tcG9uZW50LW1peGlucy9zcmMvTWl4aW4xOSc7XG5pbXBvcnQgTWl4aW4yMCBmcm9tICcuLi8uLi9qcy1jb21wb25lbnQtbWl4aW5zL3NyYy9NaXhpbjIwJztcblxuY2xhc3MgQ29tcG9uZW50MSBleHRlbmRzIENvbXBvc2FibGUoSFRNTEVsZW1lbnQpLmNvbXBvc2UoXG4gIE1peGluMSxcbiAgTWl4aW4yLFxuICBNaXhpbjMsXG4gIE1peGluNCxcbiAgTWl4aW41LFxuICBNaXhpbjYsXG4gIE1peGluNyxcbiAgTWl4aW44LFxuICBNaXhpbjksXG4gIE1peGluMTAsXG4gIE1peGluMTEsXG4gIE1peGluMTIsXG4gIE1peGluMTMsXG4gIE1peGluMTQsXG4gIE1peGluMTUsXG4gIE1peGluMTYsXG4gIE1peGluMTcsXG4gIE1peGluMTgsXG4gIE1peGluMTksXG4gIE1peGluMjBcbikge1xuXG4gIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gIH1cblxufVxuXG5kb2N1bWVudC5yZWdpc3RlckVsZW1lbnQoJ2pzLWNvbXBvbmVudC0xJywgQ29tcG9uZW50MSk7XG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQxO1xuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBDb21wb3NhYmxlLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gdG8gbWFrZSBhIGNsYXNzIG1vcmUgZWFzaWx5IGNvbXBvc2FibGUgd2l0aCBvdGhlciBtaXhpbnMuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gY29udHJpYnV0ZXMgYSBgY29tcG9zZWAgbWV0aG9kIHRoYXQgYXBwbGllcyBhIHNldCBvZiBtaXhpblxuICAgKiBmdW5jdGlvbnMgYW5kIHJldHVybnMgdGhlIHJlc3VsdGluZyBuZXcgY2xhc3MuIFRoaXMgc3VnYXIgY2FuIG1ha2UgdGhlXG4gICAqIGFwcGxpY2F0aW9uIG9mIG1hbnkgbWl4aW5zIGF0IG9uY2UgZWFzaWVyIHRvIHJlYWQuXG4gICAqL1xuICBjbGFzcyBDb21wb3NhYmxlIGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvKipcbiAgICAgKiBBcHBseSBhIHNldCBvZiBtaXhpbiBmdW5jdGlvbnMgb3IgbWl4aW4gb2JqZWN0cyB0byB0aGUgcHJlc2VudCBjbGFzcyBhbmRcbiAgICAgKiByZXR1cm4gdGhlIG5ldyBjbGFzcy5cbiAgICAgKlxuICAgICAqIEluc3RlYWQgb2Ygd3JpdGluZzpcbiAgICAgKlxuICAgICAqICAgICBsZXQgTXlDbGFzcyA9IE1peGluMShNaXhpbjIoTWl4aW4zKE1peGluNChNaXhpbjUoQmFzZUNsYXNzKSkpKSk7XG4gICAgICpcbiAgICAgKiBZb3UgY2FuIHdyaXRlOlxuICAgICAqXG4gICAgICogICAgIGxldCBNeUNsYXNzID0gQ29tcG9zYWJsZShCYXNlQ2xhc3MpLmNvbXBvc2UoXG4gICAgICogICAgICAgTWl4aW4xLFxuICAgICAqICAgICAgIE1peGluMixcbiAgICAgKiAgICAgICBNaXhpbjMsXG4gICAgICogICAgICAgTWl4aW40LFxuICAgICAqICAgICAgIE1peGluNVxuICAgICAqICAgICApO1xuICAgICAqXG4gICAgICogVGhpcyBmdW5jdGlvbiBjYW4gYWxzbyB0YWtlIG1peGluIG9iamVjdHMuIEEgbWl4aW4gb2JqZWN0IGlzIGp1c3QgYVxuICAgICAqIHNob3J0aGFuZCBmb3IgYSBtaXhpbiBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSBuZXcgc3ViY2xhc3Mgd2l0aCB0aGUgZ2l2ZW5cbiAgICAgKiBtZW1iZXJzLiBUaGUgbWl4aW4gb2JqZWN0J3MgbWVtYmVycyBhcmUgKm5vdCogY29waWVkIGRpcmVjdGx5IG9udG8gdGhlXG4gICAgICogcHJvdG90eXBlIG9mIHRoZSBiYXNlIGNsYXNzLCBhcyB3aXRoIHRyYWRpdGlvbmFsIG1peGlucy5cbiAgICAgKlxuICAgICAqIEluIGFkZGl0aW9uIHRvIHByb3ZpZGluZyBzeW50YWN0aWMgc3VnYXIsIHRoaXMgbWl4aW4gY2FuIGJlIHVzZWQgdG9cbiAgICAgKiBkZWZpbmUgYSBjbGFzcyBpbiBFUzUsIHdoaWNoIGxhY2tzIEVTNidzIGBjbGFzc2Aga2V5d29yZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Li4ubWl4aW5zfSBtaXhpbnMgLSBBIHNldCBvZiBtaXhpbiBmdW5jdGlvbnMgb3Igb2JqZWN0cyB0byBhcHBseS5cbiAgICAgKi9cbiAgICBzdGF0aWMgY29tcG9zZSguLi5taXhpbnMpIHtcbiAgICAgIC8vIFdlIGNyZWF0ZSBhIG5ldyBzdWJjbGFzcyBmb3IgZWFjaCBtaXhpbiBpbiB0dXJuLiBUaGUgcmVzdWx0IGJlY29tZXNcbiAgICAgIC8vIHRoZSBiYXNlIGNsYXNzIGV4dGVuZGVkIGJ5IGFueSBzdWJzZXF1ZW50IG1peGlucy4gSXQgdHVybnMgb3V0IHRoYXRcbiAgICAgIC8vIHdlIGNhbiB1c2UgQXJyYXkucmVkdWNlKCkgdG8gY29uY2lzZWx5IGV4cHJlc3MgdGhpcywgdXNpbmcgdGhlIGN1cnJlbnRcbiAgICAgIC8vIG9iamVjdCBhcyB0aGUgc2VlZCBmb3IgcmVkdWNlKCkuXG4gICAgICByZXR1cm4gbWl4aW5zLnJlZHVjZShjb21wb3NlQ2xhc3MsIHRoaXMpO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIENvbXBvc2FibGU7XG59O1xuXG5cbi8vIFByb3BlcnRpZXMgZGVmaW5lZCBieSBPYmplY3QgdGhhdCB3ZSBkb24ndCB3YW50IHRvIG1peGluLlxuY29uc3QgTk9OX01JWEFCTEVfT0JKRUNUX1BST1BFUlRJRVMgPSBbXG4gICdjb25zdHJ1Y3Rvcidcbl07XG5cbi8qXG4gKiBBcHBseSB0aGUgbWl4aW4gdG8gdGhlIGdpdmVuIGJhc2UgY2xhc3MgdG8gcmV0dXJuIGEgbmV3IGNsYXNzLlxuICogVGhlIG1peGluIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG1vZGlmaWVkIGNsYXNzLCBvciBhXG4gKiBwbGFpbiBvYmplY3Qgd2hvc2UgbWVtYmVycyB3aWxsIGJlIGNvcGllZCB0byB0aGUgbmV3IGNsYXNzJyBwcm90b3R5cGUuXG4gKi9cbmZ1bmN0aW9uIGNvbXBvc2VDbGFzcyhiYXNlLCBtaXhpbikge1xuICBpZiAodHlwZW9mIG1peGluID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gTWl4aW4gZnVuY3Rpb25cbiAgICByZXR1cm4gbWl4aW4oYmFzZSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gTWl4aW4gb2JqZWN0XG4gICAgY2xhc3MgU3ViY2xhc3MgZXh0ZW5kcyBiYXNlIHt9XG4gICAgY29weU93blByb3BlcnRpZXMobWl4aW4sIFN1YmNsYXNzLnByb3RvdHlwZSwgTk9OX01JWEFCTEVfT0JKRUNUX1BST1BFUlRJRVMpO1xuICAgIHJldHVybiBTdWJjbGFzcztcbiAgfVxufVxuXG5cbi8qXG4gKiBDb3B5IHRoZSBnaXZlbiBwcm9wZXJ0aWVzL21ldGhvZHMgdG8gdGhlIHRhcmdldC5cbiAqIFJldHVybiB0aGUgdXBkYXRlZCB0YXJnZXQuXG4gKi9cbmZ1bmN0aW9uIGNvcHlPd25Qcm9wZXJ0aWVzKHNvdXJjZSwgdGFyZ2V0LCBpZ25vcmVQcm9wZXJ0eU5hbWVzID0gW10pIHtcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc291cmNlKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgIGlmIChpZ25vcmVQcm9wZXJ0eU5hbWVzLmluZGV4T2YobmFtZSkgPCAwKSB7XG4gICAgICBsZXQgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBuYW1lKTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0YXJnZXQ7XG59XG4iLCJleHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIGNsYXNzIE1peGluMSBleHRlbmRzIGJhc2Uge1xuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgIH1cblxuICAgIE1peGluMV9NZXRob2RfMShhLCBiKSB7XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgfVxuXG4gICAgTWl4aW4xX01ldGhvZF8yKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBNaXhpbjE7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICBjbGFzcyBNaXhpbjEwIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgfVxuXG4gICAgTWl4aW4xMF9NZXRob2RfMShhLCBiKSB7XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgfVxuXG4gICAgTWl4aW4xMF9NZXRob2RfMihhLCBiKSB7XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gTWl4aW4xMDtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIGNsYXNzIE1peGluMTEgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICB9XG5cbiAgICBNaXhpbjExX01ldGhvZF8xKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgICBNaXhpbjExX01ldGhvZF8yKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBNaXhpbjExO1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgY2xhc3MgTWl4aW4xMiBleHRlbmRzIGJhc2Uge1xuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgIH1cblxuICAgIE1peGluMTJfTWV0aG9kXzEoYSwgYikge1xuICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIH1cblxuICAgIE1peGluMTJfTWV0aG9kXzIoYSwgYikge1xuICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIE1peGluMTI7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICBjbGFzcyBNaXhpbjEzIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgfVxuXG4gICAgTWl4aW4xM19NZXRob2RfMShhLCBiKSB7XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgfVxuXG4gICAgTWl4aW4xM19NZXRob2RfMihhLCBiKSB7XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gTWl4aW4xMztcbn07XG4iLCJleHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIGNsYXNzIE1peGluMTQgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICB9XG5cbiAgICBNaXhpbjE0X01ldGhvZF8xKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgICBNaXhpbjE0X01ldGhvZF8yKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBNaXhpbjE0O1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgY2xhc3MgTWl4aW4xNSBleHRlbmRzIGJhc2Uge1xuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgIH1cblxuICAgIE1peGluMTVfTWV0aG9kXzEoYSwgYikge1xuICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIH1cblxuICAgIE1peGluMTVfTWV0aG9kXzIoYSwgYikge1xuICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIE1peGluMTU7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICBjbGFzcyBNaXhpbjE2IGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgfVxuXG4gICAgTWl4aW4xNl9NZXRob2RfMShhLCBiKSB7XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgfVxuXG4gICAgTWl4aW4xNl9NZXRob2RfMihhLCBiKSB7XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gTWl4aW4xNjtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIGNsYXNzIE1peGluMTcgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICB9XG5cbiAgICBNaXhpbjE3X01ldGhvZF8xKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgICBNaXhpbjE3X01ldGhvZF8yKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBNaXhpbjE3O1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgY2xhc3MgTWl4aW4xOCBleHRlbmRzIGJhc2Uge1xuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgIH1cblxuICAgIE1peGluMThfTWV0aG9kXzEoYSwgYikge1xuICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIH1cblxuICAgIE1peGluMThfTWV0aG9kXzIoYSwgYikge1xuICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIE1peGluMTg7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICBjbGFzcyBNaXhpbjE5IGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgfVxuXG4gICAgTWl4aW4xOV9NZXRob2RfMShhLCBiKSB7XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgfVxuXG4gICAgTWl4aW4xOV9NZXRob2RfMihhLCBiKSB7XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gTWl4aW4xOTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIGNsYXNzIE1peGluMiBleHRlbmRzIGJhc2Uge1xuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgIH1cblxuICAgIE1peGluMl9NZXRob2RfMShhLCBiKSB7XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgfVxuXG4gICAgTWl4aW4yX01ldGhvZF8yKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBNaXhpbjI7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICBjbGFzcyBNaXhpbjIwIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgfVxuXG4gICAgTWl4aW4yMF9NZXRob2RfMShhLCBiKSB7XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgfVxuXG4gICAgTWl4aW4yMF9NZXRob2RfMihhLCBiKSB7XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gTWl4aW4yMDtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIGNsYXNzIE1peGluMyBleHRlbmRzIGJhc2Uge1xuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgIH1cblxuICAgIE1peGluM19NZXRob2RfMShhLCBiKSB7XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgfVxuXG4gICAgTWl4aW4zX01ldGhvZF8yKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBNaXhpbjM7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICBjbGFzcyBNaXhpbjQgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICB9XG5cbiAgICBNaXhpbjRfTWV0aG9kXzEoYSwgYikge1xuICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIH1cblxuICAgIE1peGluNF9NZXRob2RfMihhLCBiKSB7XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gTWl4aW40O1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgY2xhc3MgTWl4aW41IGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgfVxuXG4gICAgTWl4aW41X01ldGhvZF8xKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgICBNaXhpbjVfTWV0aG9kXzIoYSwgYikge1xuICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIE1peGluNTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIGNsYXNzIE1peGluNiBleHRlbmRzIGJhc2Uge1xuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgIH1cblxuICAgIE1peGluNl9NZXRob2RfMShhLCBiKSB7XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgfVxuXG4gICAgTWl4aW42X01ldGhvZF8yKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBNaXhpbjY7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICBjbGFzcyBNaXhpbjcgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICB9XG5cbiAgICBNaXhpbjdfTWV0aG9kXzEoYSwgYikge1xuICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIH1cblxuICAgIE1peGluN19NZXRob2RfMihhLCBiKSB7XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gTWl4aW43O1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgY2xhc3MgTWl4aW44IGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgfVxuXG4gICAgTWl4aW44X01ldGhvZF8xKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgICBNaXhpbjhfTWV0aG9kXzIoYSwgYikge1xuICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIE1peGluODtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIGNsYXNzIE1peGluOSBleHRlbmRzIGJhc2Uge1xuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgIH1cblxuICAgIE1peGluOV9NZXRob2RfMShhLCBiKSB7XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgfVxuXG4gICAgTWl4aW45X01ldGhvZF8yKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBNaXhpbjk7XG59O1xuIl19
