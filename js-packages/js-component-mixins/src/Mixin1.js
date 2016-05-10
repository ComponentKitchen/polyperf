export default (base) => {

  class Mixin1 extends base {

    createdCallback() {
      if (super.createdCallback) { super.createdCallback(); }
    }

    Mixin1_Method_1(a, b) {
      return a + b;
    }

    Mixin1_Method_2(a, b) {
      return a + b;
    }

  }

  return Mixin1;
};
