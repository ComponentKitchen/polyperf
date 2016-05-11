export default (base) => {

  class Mixin16 extends base {

    createdCallback() {
      if (super.createdCallback) { super.createdCallback(); }
    }

    Mixin16_Method_1(a, b) {
      return a + b;
    }

    Mixin16_Method_2(a, b) {
      return a + b;
    }

  }

  return Mixin16;
};
