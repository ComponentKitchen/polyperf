export default (base) => {

  class Mixin8 extends base {

    createdCallback() {
      if (super.createdCallback) { super.createdCallback(); }
    }

    Mixin8_Method_1(a, b) {
      return a + b;
    }

    Mixin8_Method_2(a, b) {
      return a + b;
    }

  }

  return Mixin8;
};
