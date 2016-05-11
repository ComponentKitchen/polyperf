export default (base) => {

  class Mixin6 extends base {

    createdCallback() {
      if (super.createdCallback) { super.createdCallback(); }
    }

    Mixin6_Method_1(a, b) {
      return a + b;
    }

    Mixin6_Method_2(a, b) {
      return a + b;
    }

  }

  return Mixin6;
};
