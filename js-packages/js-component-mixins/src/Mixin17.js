export default (base) => {

  class Mixin17 extends base {

    createdCallback() {
      if (super.createdCallback) { super.createdCallback(); }
    }

    Mixin17_Method_1(a, b) {
      return a + b;
    }

    Mixin17_Method_2(a, b) {
      return a + b;
    }

  }

  return Mixin17;
};
