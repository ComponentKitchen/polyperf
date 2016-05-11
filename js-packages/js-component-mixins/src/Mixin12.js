export default (base) => {

  class Mixin12 extends base {

    createdCallback() {
      if (super.createdCallback) { super.createdCallback(); }
    }

    Mixin12_Method_1(a, b) {
      return a + b;
    }

    Mixin12_Method_2(a, b) {
      return a + b;
    }

  }

  return Mixin12;
};
