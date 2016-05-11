export default (base) => {

  class Mixin13 extends base {

    createdCallback() {
      if (super.createdCallback) { super.createdCallback(); }
    }

    Mixin13_Method_1(a, b) {
      return a + b;
    }

    Mixin13_Method_2(a, b) {
      return a + b;
    }

  }

  return Mixin13;
};
