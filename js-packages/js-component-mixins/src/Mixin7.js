export default (base) => {

  class Mixin7 extends base {

    createdCallback() {
      if (super.createdCallback) { super.createdCallback(); }
    }

    Mixin7_Method_1(a, b) {
      return a + b;
    }

    Mixin7_Method_2(a, b) {
      return a + b;
    }

  }

  return Mixin7;
};
