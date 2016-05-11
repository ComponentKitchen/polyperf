export default (base) => {

  class Mixin14 extends base {

    createdCallback() {
      if (super.createdCallback) { super.createdCallback(); }
    }

    Mixin14_Method_1(a, b) {
      return a + b;
    }

    Mixin14_Method_2(a, b) {
      return a + b;
    }

  }

  return Mixin14;
};
