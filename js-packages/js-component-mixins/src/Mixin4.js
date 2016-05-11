export default (base) => {

  class Mixin4 extends base {

    createdCallback() {
      if (super.createdCallback) { super.createdCallback(); }
    }

    Mixin4_Method_1(a, b) {
      return a + b;
    }

    Mixin4_Method_2(a, b) {
      return a + b;
    }

  }

  return Mixin4;
};
