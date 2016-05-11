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

      // Check for the existence on the host page of the createdCallbackComplete method
      // and call it if it exists
      if (window.createdCallbackComplete) {
        window.createdCallbackComplete();
      }
    }

    /*
     * Debugging utility: logs a message, prefixed by the component's tag.
     */

  }, {
    key: 'log',
    value: function log(text) {
      if (_get(Object.getPrototypeOf(Component1.prototype), 'log', this)) {
        _get(Object.getPrototypeOf(Component1.prototype), 'log', this).call(this, text);
      }
      console.log(this.localName + ': ' + text);
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy1wYWNrYWdlcy9qcy1jb21wb25lbnQtMS9zcmMvQ29tcG9uZW50MS5qcyIsImpzLXBhY2thZ2VzL2pzLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbXBvc2FibGUuanMiLCJqcy1wYWNrYWdlcy9qcy1jb21wb25lbnQtbWl4aW5zL3NyYy9NaXhpbjEuanMiLCJqcy1wYWNrYWdlcy9qcy1jb21wb25lbnQtbWl4aW5zL3NyYy9NaXhpbjEwLmpzIiwianMtcGFja2FnZXMvanMtY29tcG9uZW50LW1peGlucy9zcmMvTWl4aW4xMS5qcyIsImpzLXBhY2thZ2VzL2pzLWNvbXBvbmVudC1taXhpbnMvc3JjL01peGluMTIuanMiLCJqcy1wYWNrYWdlcy9qcy1jb21wb25lbnQtbWl4aW5zL3NyYy9NaXhpbjEzLmpzIiwianMtcGFja2FnZXMvanMtY29tcG9uZW50LW1peGlucy9zcmMvTWl4aW4xNC5qcyIsImpzLXBhY2thZ2VzL2pzLWNvbXBvbmVudC1taXhpbnMvc3JjL01peGluMTUuanMiLCJqcy1wYWNrYWdlcy9qcy1jb21wb25lbnQtbWl4aW5zL3NyYy9NaXhpbjE2LmpzIiwianMtcGFja2FnZXMvanMtY29tcG9uZW50LW1peGlucy9zcmMvTWl4aW4xNy5qcyIsImpzLXBhY2thZ2VzL2pzLWNvbXBvbmVudC1taXhpbnMvc3JjL01peGluMTguanMiLCJqcy1wYWNrYWdlcy9qcy1jb21wb25lbnQtbWl4aW5zL3NyYy9NaXhpbjE5LmpzIiwianMtcGFja2FnZXMvanMtY29tcG9uZW50LW1peGlucy9zcmMvTWl4aW4yLmpzIiwianMtcGFja2FnZXMvanMtY29tcG9uZW50LW1peGlucy9zcmMvTWl4aW4yMC5qcyIsImpzLXBhY2thZ2VzL2pzLWNvbXBvbmVudC1taXhpbnMvc3JjL01peGluMy5qcyIsImpzLXBhY2thZ2VzL2pzLWNvbXBvbmVudC1taXhpbnMvc3JjL01peGluNC5qcyIsImpzLXBhY2thZ2VzL2pzLWNvbXBvbmVudC1taXhpbnMvc3JjL01peGluNS5qcyIsImpzLXBhY2thZ2VzL2pzLWNvbXBvbmVudC1taXhpbnMvc3JjL01peGluNi5qcyIsImpzLXBhY2thZ2VzL2pzLWNvbXBvbmVudC1taXhpbnMvc3JjL01peGluNy5qcyIsImpzLXBhY2thZ2VzL2pzLWNvbXBvbmVudC1taXhpbnMvc3JjL01peGluOC5qcyIsImpzLXBhY2thZ2VzL2pzLWNvbXBvbmVudC1taXhpbnMvc3JjL01peGluOS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNLFU7Ozs7Ozs7Ozs7O3NDQXVCYztBQUNoQixzRkFBMkI7QUFBRTtBQUEwQjs7OztBQUl2RCxVQUFJLE9BQU8sdUJBQVgsRUFBb0M7QUFDbEMsZUFBTyx1QkFBUDtBQUNEO0FBQ0Y7Ozs7Ozs7O3dCQUtHLEksRUFBTTtBQUNSLDBFQUFlO0FBQUMsa0ZBQVUsSUFBVjtBQUFpQjtBQUNqQyxjQUFRLEdBQVIsQ0FBZSxLQUFLLFNBQXBCLFVBQWtDLElBQWxDO0FBQ0Q7Ozs7RUF2Q3NCLDBCQUFXLFdBQVgsRUFBd0IsT0FBeEIsb1c7O0FBMkN6QixTQUFTLGVBQVQsQ0FBeUIsZ0JBQXpCLEVBQTJDLFVBQTNDO2tCQUNlLFU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDakVBLFVBQUMsSUFBRCxFQUFVOzs7Ozs7Ozs7O0FBQUEsTUFTakIsVUFUaUI7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdDQXVDSztBQUFBLDBDQUFS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QUNEO0FBZG9COztBQUFBO0FBQUEsSUFFRixJQUZFOztBQWtCdkIsU0FBTyxNQUFQO0FBQ0QsQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgQ29tcG9zYWJsZSBmcm9tICcuLi8uLi9qcy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db21wb3NhYmxlJztcbmltcG9ydCBNaXhpbjEgZnJvbSAnLi4vLi4vanMtY29tcG9uZW50LW1peGlucy9zcmMvTWl4aW4xJztcbmltcG9ydCBNaXhpbjIgZnJvbSAnLi4vLi4vanMtY29tcG9uZW50LW1peGlucy9zcmMvTWl4aW4yJztcbmltcG9ydCBNaXhpbjMgZnJvbSAnLi4vLi4vanMtY29tcG9uZW50LW1peGlucy9zcmMvTWl4aW4zJztcbmltcG9ydCBNaXhpbjQgZnJvbSAnLi4vLi4vanMtY29tcG9uZW50LW1peGlucy9zcmMvTWl4aW40JztcbmltcG9ydCBNaXhpbjUgZnJvbSAnLi4vLi4vanMtY29tcG9uZW50LW1peGlucy9zcmMvTWl4aW41JztcbmltcG9ydCBNaXhpbjYgZnJvbSAnLi4vLi4vanMtY29tcG9uZW50LW1peGlucy9zcmMvTWl4aW42JztcbmltcG9ydCBNaXhpbjcgZnJvbSAnLi4vLi4vanMtY29tcG9uZW50LW1peGlucy9zcmMvTWl4aW43JztcbmltcG9ydCBNaXhpbjggZnJvbSAnLi4vLi4vanMtY29tcG9uZW50LW1peGlucy9zcmMvTWl4aW44JztcbmltcG9ydCBNaXhpbjkgZnJvbSAnLi4vLi4vanMtY29tcG9uZW50LW1peGlucy9zcmMvTWl4aW45JztcbmltcG9ydCBNaXhpbjEwIGZyb20gJy4uLy4uL2pzLWNvbXBvbmVudC1taXhpbnMvc3JjL01peGluMTAnO1xuaW1wb3J0IE1peGluMTEgZnJvbSAnLi4vLi4vanMtY29tcG9uZW50LW1peGlucy9zcmMvTWl4aW4xMSc7XG5pbXBvcnQgTWl4aW4xMiBmcm9tICcuLi8uLi9qcy1jb21wb25lbnQtbWl4aW5zL3NyYy9NaXhpbjEyJztcbmltcG9ydCBNaXhpbjEzIGZyb20gJy4uLy4uL2pzLWNvbXBvbmVudC1taXhpbnMvc3JjL01peGluMTMnO1xuaW1wb3J0IE1peGluMTQgZnJvbSAnLi4vLi4vanMtY29tcG9uZW50LW1peGlucy9zcmMvTWl4aW4xNCc7XG5pbXBvcnQgTWl4aW4xNSBmcm9tICcuLi8uLi9qcy1jb21wb25lbnQtbWl4aW5zL3NyYy9NaXhpbjE1JztcbmltcG9ydCBNaXhpbjE2IGZyb20gJy4uLy4uL2pzLWNvbXBvbmVudC1taXhpbnMvc3JjL01peGluMTYnO1xuaW1wb3J0IE1peGluMTcgZnJvbSAnLi4vLi4vanMtY29tcG9uZW50LW1peGlucy9zcmMvTWl4aW4xNyc7XG5pbXBvcnQgTWl4aW4xOCBmcm9tICcuLi8uLi9qcy1jb21wb25lbnQtbWl4aW5zL3NyYy9NaXhpbjE4JztcbmltcG9ydCBNaXhpbjE5IGZyb20gJy4uLy4uL2pzLWNvbXBvbmVudC1taXhpbnMvc3JjL01peGluMTknO1xuaW1wb3J0IE1peGluMjAgZnJvbSAnLi4vLi4vanMtY29tcG9uZW50LW1peGlucy9zcmMvTWl4aW4yMCc7XG5cbmNsYXNzIENvbXBvbmVudDEgZXh0ZW5kcyBDb21wb3NhYmxlKEhUTUxFbGVtZW50KS5jb21wb3NlKFxuICBNaXhpbjEsXG4gIE1peGluMixcbiAgTWl4aW4zLFxuICBNaXhpbjQsXG4gIE1peGluNSxcbiAgTWl4aW42LFxuICBNaXhpbjcsXG4gIE1peGluOCxcbiAgTWl4aW45LFxuICBNaXhpbjEwLFxuICBNaXhpbjExLFxuICBNaXhpbjEyLFxuICBNaXhpbjEzLFxuICBNaXhpbjE0LFxuICBNaXhpbjE1LFxuICBNaXhpbjE2LFxuICBNaXhpbjE3LFxuICBNaXhpbjE4LFxuICBNaXhpbjE5LFxuICBNaXhpbjIwXG4pIHtcblxuICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIHRoZSBleGlzdGVuY2Ugb24gdGhlIGhvc3QgcGFnZSBvZiB0aGUgY3JlYXRlZENhbGxiYWNrQ29tcGxldGUgbWV0aG9kXG4gICAgLy8gYW5kIGNhbGwgaXQgaWYgaXQgZXhpc3RzXG4gICAgaWYgKHdpbmRvdy5jcmVhdGVkQ2FsbGJhY2tDb21wbGV0ZSkge1xuICAgICAgd2luZG93LmNyZWF0ZWRDYWxsYmFja0NvbXBsZXRlKCk7XG4gICAgfVxuICB9XG5cbiAgLypcbiAgICogRGVidWdnaW5nIHV0aWxpdHk6IGxvZ3MgYSBtZXNzYWdlLCBwcmVmaXhlZCBieSB0aGUgY29tcG9uZW50J3MgdGFnLlxuICAgKi9cbiAgbG9nKHRleHQpIHtcbiAgICBpZiAoc3VwZXIubG9nKSB7c3VwZXIubG9nKHRleHQpO31cbiAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmxvY2FsTmFtZX06ICR7dGV4dH1gKTtcbiAgfVxuXG59XG5cbmRvY3VtZW50LnJlZ2lzdGVyRWxlbWVudCgnanMtY29tcG9uZW50LTEnLCBDb21wb25lbnQxKTtcbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDE7XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIENvbXBvc2FibGUuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB0byBtYWtlIGEgY2xhc3MgbW9yZSBlYXNpbHkgY29tcG9zYWJsZSB3aXRoIG90aGVyIG1peGlucy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBjb250cmlidXRlcyBhIGBjb21wb3NlYCBtZXRob2QgdGhhdCBhcHBsaWVzIGEgc2V0IG9mIG1peGluXG4gICAqIGZ1bmN0aW9ucyBhbmQgcmV0dXJucyB0aGUgcmVzdWx0aW5nIG5ldyBjbGFzcy4gVGhpcyBzdWdhciBjYW4gbWFrZSB0aGVcbiAgICogYXBwbGljYXRpb24gb2YgbWFueSBtaXhpbnMgYXQgb25jZSBlYXNpZXIgdG8gcmVhZC5cbiAgICovXG4gIGNsYXNzIENvbXBvc2FibGUgZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qKlxuICAgICAqIEFwcGx5IGEgc2V0IG9mIG1peGluIGZ1bmN0aW9ucyBvciBtaXhpbiBvYmplY3RzIHRvIHRoZSBwcmVzZW50IGNsYXNzIGFuZFxuICAgICAqIHJldHVybiB0aGUgbmV3IGNsYXNzLlxuICAgICAqXG4gICAgICogSW5zdGVhZCBvZiB3cml0aW5nOlxuICAgICAqXG4gICAgICogICAgIGxldCBNeUNsYXNzID0gTWl4aW4xKE1peGluMihNaXhpbjMoTWl4aW40KE1peGluNShCYXNlQ2xhc3MpKSkpKTtcbiAgICAgKlxuICAgICAqIFlvdSBjYW4gd3JpdGU6XG4gICAgICpcbiAgICAgKiAgICAgbGV0IE15Q2xhc3MgPSBDb21wb3NhYmxlKEJhc2VDbGFzcykuY29tcG9zZShcbiAgICAgKiAgICAgICBNaXhpbjEsXG4gICAgICogICAgICAgTWl4aW4yLFxuICAgICAqICAgICAgIE1peGluMyxcbiAgICAgKiAgICAgICBNaXhpbjQsXG4gICAgICogICAgICAgTWl4aW41XG4gICAgICogICAgICk7XG4gICAgICpcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGNhbiBhbHNvIHRha2UgbWl4aW4gb2JqZWN0cy4gQSBtaXhpbiBvYmplY3QgaXMganVzdCBhXG4gICAgICogc2hvcnRoYW5kIGZvciBhIG1peGluIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhIG5ldyBzdWJjbGFzcyB3aXRoIHRoZSBnaXZlblxuICAgICAqIG1lbWJlcnMuIFRoZSBtaXhpbiBvYmplY3QncyBtZW1iZXJzIGFyZSAqbm90KiBjb3BpZWQgZGlyZWN0bHkgb250byB0aGVcbiAgICAgKiBwcm90b3R5cGUgb2YgdGhlIGJhc2UgY2xhc3MsIGFzIHdpdGggdHJhZGl0aW9uYWwgbWl4aW5zLlxuICAgICAqXG4gICAgICogSW4gYWRkaXRpb24gdG8gcHJvdmlkaW5nIHN5bnRhY3RpYyBzdWdhciwgdGhpcyBtaXhpbiBjYW4gYmUgdXNlZCB0b1xuICAgICAqIGRlZmluZSBhIGNsYXNzIGluIEVTNSwgd2hpY2ggbGFja3MgRVM2J3MgYGNsYXNzYCBrZXl3b3JkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHsuLi5taXhpbnN9IG1peGlucyAtIEEgc2V0IG9mIG1peGluIGZ1bmN0aW9ucyBvciBvYmplY3RzIHRvIGFwcGx5LlxuICAgICAqL1xuICAgIHN0YXRpYyBjb21wb3NlKC4uLm1peGlucykge1xuICAgICAgLy8gV2UgY3JlYXRlIGEgbmV3IHN1YmNsYXNzIGZvciBlYWNoIG1peGluIGluIHR1cm4uIFRoZSByZXN1bHQgYmVjb21lc1xuICAgICAgLy8gdGhlIGJhc2UgY2xhc3MgZXh0ZW5kZWQgYnkgYW55IHN1YnNlcXVlbnQgbWl4aW5zLiBJdCB0dXJucyBvdXQgdGhhdFxuICAgICAgLy8gd2UgY2FuIHVzZSBBcnJheS5yZWR1Y2UoKSB0byBjb25jaXNlbHkgZXhwcmVzcyB0aGlzLCB1c2luZyB0aGUgY3VycmVudFxuICAgICAgLy8gb2JqZWN0IGFzIHRoZSBzZWVkIGZvciByZWR1Y2UoKS5cbiAgICAgIHJldHVybiBtaXhpbnMucmVkdWNlKGNvbXBvc2VDbGFzcywgdGhpcyk7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gQ29tcG9zYWJsZTtcbn07XG5cblxuLy8gUHJvcGVydGllcyBkZWZpbmVkIGJ5IE9iamVjdCB0aGF0IHdlIGRvbid0IHdhbnQgdG8gbWl4aW4uXG5jb25zdCBOT05fTUlYQUJMRV9PQkpFQ1RfUFJPUEVSVElFUyA9IFtcbiAgJ2NvbnN0cnVjdG9yJ1xuXTtcblxuLypcbiAqIEFwcGx5IHRoZSBtaXhpbiB0byB0aGUgZ2l2ZW4gYmFzZSBjbGFzcyB0byByZXR1cm4gYSBuZXcgY2xhc3MuXG4gKiBUaGUgbWl4aW4gY2FuIGVpdGhlciBiZSBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgbW9kaWZpZWQgY2xhc3MsIG9yIGFcbiAqIHBsYWluIG9iamVjdCB3aG9zZSBtZW1iZXJzIHdpbGwgYmUgY29waWVkIHRvIHRoZSBuZXcgY2xhc3MnIHByb3RvdHlwZS5cbiAqL1xuZnVuY3Rpb24gY29tcG9zZUNsYXNzKGJhc2UsIG1peGluKSB7XG4gIGlmICh0eXBlb2YgbWl4aW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBNaXhpbiBmdW5jdGlvblxuICAgIHJldHVybiBtaXhpbihiYXNlKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBNaXhpbiBvYmplY3RcbiAgICBjbGFzcyBTdWJjbGFzcyBleHRlbmRzIGJhc2Uge31cbiAgICBjb3B5T3duUHJvcGVydGllcyhtaXhpbiwgU3ViY2xhc3MucHJvdG90eXBlLCBOT05fTUlYQUJMRV9PQkpFQ1RfUFJPUEVSVElFUyk7XG4gICAgcmV0dXJuIFN1YmNsYXNzO1xuICB9XG59XG5cblxuLypcbiAqIENvcHkgdGhlIGdpdmVuIHByb3BlcnRpZXMvbWV0aG9kcyB0byB0aGUgdGFyZ2V0LlxuICogUmV0dXJuIHRoZSB1cGRhdGVkIHRhcmdldC5cbiAqL1xuZnVuY3Rpb24gY29weU93blByb3BlcnRpZXMoc291cmNlLCB0YXJnZXQsIGlnbm9yZVByb3BlcnR5TmFtZXMgPSBbXSkge1xuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2UpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgaWYgKGlnbm9yZVByb3BlcnR5TmFtZXMuaW5kZXhPZihuYW1lKSA8IDApIHtcbiAgICAgIGxldCBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIG5hbWUpO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHRhcmdldDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgY2xhc3MgTWl4aW4xIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgfVxuXG4gICAgTWl4aW4xX01ldGhvZF8xKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgICBNaXhpbjFfTWV0aG9kXzIoYSwgYikge1xuICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIE1peGluMTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIGNsYXNzIE1peGluMTAgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICB9XG5cbiAgICBNaXhpbjEwX01ldGhvZF8xKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgICBNaXhpbjEwX01ldGhvZF8yKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBNaXhpbjEwO1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgY2xhc3MgTWl4aW4xMSBleHRlbmRzIGJhc2Uge1xuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgIH1cblxuICAgIE1peGluMTFfTWV0aG9kXzEoYSwgYikge1xuICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIH1cblxuICAgIE1peGluMTFfTWV0aG9kXzIoYSwgYikge1xuICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIE1peGluMTE7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICBjbGFzcyBNaXhpbjEyIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgfVxuXG4gICAgTWl4aW4xMl9NZXRob2RfMShhLCBiKSB7XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgfVxuXG4gICAgTWl4aW4xMl9NZXRob2RfMihhLCBiKSB7XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gTWl4aW4xMjtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIGNsYXNzIE1peGluMTMgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICB9XG5cbiAgICBNaXhpbjEzX01ldGhvZF8xKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgICBNaXhpbjEzX01ldGhvZF8yKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBNaXhpbjEzO1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgY2xhc3MgTWl4aW4xNCBleHRlbmRzIGJhc2Uge1xuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgIH1cblxuICAgIE1peGluMTRfTWV0aG9kXzEoYSwgYikge1xuICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIH1cblxuICAgIE1peGluMTRfTWV0aG9kXzIoYSwgYikge1xuICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIE1peGluMTQ7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICBjbGFzcyBNaXhpbjE1IGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgfVxuXG4gICAgTWl4aW4xNV9NZXRob2RfMShhLCBiKSB7XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgfVxuXG4gICAgTWl4aW4xNV9NZXRob2RfMihhLCBiKSB7XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gTWl4aW4xNTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIGNsYXNzIE1peGluMTYgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICB9XG5cbiAgICBNaXhpbjE2X01ldGhvZF8xKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgICBNaXhpbjE2X01ldGhvZF8yKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBNaXhpbjE2O1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgY2xhc3MgTWl4aW4xNyBleHRlbmRzIGJhc2Uge1xuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgIH1cblxuICAgIE1peGluMTdfTWV0aG9kXzEoYSwgYikge1xuICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIH1cblxuICAgIE1peGluMTdfTWV0aG9kXzIoYSwgYikge1xuICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIE1peGluMTc7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICBjbGFzcyBNaXhpbjE4IGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgfVxuXG4gICAgTWl4aW4xOF9NZXRob2RfMShhLCBiKSB7XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgfVxuXG4gICAgTWl4aW4xOF9NZXRob2RfMihhLCBiKSB7XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gTWl4aW4xODtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIGNsYXNzIE1peGluMTkgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICB9XG5cbiAgICBNaXhpbjE5X01ldGhvZF8xKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgICBNaXhpbjE5X01ldGhvZF8yKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBNaXhpbjE5O1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgY2xhc3MgTWl4aW4yIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgfVxuXG4gICAgTWl4aW4yX01ldGhvZF8xKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgICBNaXhpbjJfTWV0aG9kXzIoYSwgYikge1xuICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIE1peGluMjtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIGNsYXNzIE1peGluMjAgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICB9XG5cbiAgICBNaXhpbjIwX01ldGhvZF8xKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgICBNaXhpbjIwX01ldGhvZF8yKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBNaXhpbjIwO1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgY2xhc3MgTWl4aW4zIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgfVxuXG4gICAgTWl4aW4zX01ldGhvZF8xKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgICBNaXhpbjNfTWV0aG9kXzIoYSwgYikge1xuICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIE1peGluMztcbn07XG4iLCJleHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIGNsYXNzIE1peGluNCBleHRlbmRzIGJhc2Uge1xuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgIH1cblxuICAgIE1peGluNF9NZXRob2RfMShhLCBiKSB7XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgfVxuXG4gICAgTWl4aW40X01ldGhvZF8yKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBNaXhpbjQ7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICBjbGFzcyBNaXhpbjUgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICB9XG5cbiAgICBNaXhpbjVfTWV0aG9kXzEoYSwgYikge1xuICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIH1cblxuICAgIE1peGluNV9NZXRob2RfMihhLCBiKSB7XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gTWl4aW41O1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgY2xhc3MgTWl4aW42IGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgfVxuXG4gICAgTWl4aW42X01ldGhvZF8xKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgICBNaXhpbjZfTWV0aG9kXzIoYSwgYikge1xuICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIE1peGluNjtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIGNsYXNzIE1peGluNyBleHRlbmRzIGJhc2Uge1xuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgIH1cblxuICAgIE1peGluN19NZXRob2RfMShhLCBiKSB7XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgfVxuXG4gICAgTWl4aW43X01ldGhvZF8yKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBNaXhpbjc7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICBjbGFzcyBNaXhpbjggZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICB9XG5cbiAgICBNaXhpbjhfTWV0aG9kXzEoYSwgYikge1xuICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIH1cblxuICAgIE1peGluOF9NZXRob2RfMihhLCBiKSB7XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gTWl4aW44O1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgY2xhc3MgTWl4aW45IGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgfVxuXG4gICAgTWl4aW45X01ldGhvZF8xKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG5cbiAgICBNaXhpbjlfTWV0aG9kXzIoYSwgYikge1xuICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIE1peGluOTtcbn07XG4iXX0=
