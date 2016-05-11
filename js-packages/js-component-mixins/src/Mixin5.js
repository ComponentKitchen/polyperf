export default (base) => {

  class Mixin5 extends base {

    createdCallback() {
      if (super.createdCallback) { super.createdCallback(); }
    }

    Mixin5_Method_1(a, b) {
      return a + b;
    }

    Mixin5_Method_2(a, b) {
      return a + b;
    }

  }

  return Mixin5;
};
