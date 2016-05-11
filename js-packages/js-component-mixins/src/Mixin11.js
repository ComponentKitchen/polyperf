export default (base) => {

  class Mixin11 extends base {

    createdCallback() {
      if (super.createdCallback) { super.createdCallback(); }
    }

    Mixin11_Method_1(a, b) {
      return a + b;
    }

    Mixin11_Method_2(a, b) {
      return a + b;
    }

  }

  return Mixin11;
};
