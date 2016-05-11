export default (base) => {

  class Mixin20 extends base {

    createdCallback() {
      if (super.createdCallback) { super.createdCallback(); }
    }

    Mixin20_Method_1(a, b) {
      return a + b;
    }

    Mixin20_Method_2(a, b) {
      return a + b;
    }

  }

  return Mixin20;
};
