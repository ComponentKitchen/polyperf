export default (base) => {

  class Mixin10 extends base {

    createdCallback() {
      if (super.createdCallback) { super.createdCallback(); }
    }

    Mixin10_Method_1(a, b) {
      return a + b;
    }

    Mixin10_Method_2(a, b) {
      return a + b;
    }

  }

  return Mixin10;
};
