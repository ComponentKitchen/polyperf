export default (base) => {

  class Mixin18 extends base {

    createdCallback() {
      if (super.createdCallback) { super.createdCallback(); }
    }

    Mixin18_Method_1(a, b) {
      return a + b;
    }

    Mixin18_Method_2(a, b) {
      return a + b;
    }

  }

  return Mixin18;
};
