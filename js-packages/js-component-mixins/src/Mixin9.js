export default (base) => {

  class Mixin9 extends base {

    createdCallback() {
      if (super.createdCallback) { super.createdCallback(); }
    }

    Mixin9_Method_1(a, b) {
      return a + b;
    }

    Mixin9_Method_2(a, b) {
      return a + b;
    }

  }

  return Mixin9;
};
