export default (base) => {

  class Mixin2 extends base {

    createdCallback() {
      if (super.createdCallback) { super.createdCallback(); }
    }

    Mixin2_Method_1(a, b) {
      return a + b;
    }

    Mixin2_Method_2(a, b) {
      return a + b;
    }

  }

  return Mixin2;
};
