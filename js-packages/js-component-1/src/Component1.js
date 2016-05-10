import Composable from '../../js-component-mixins/src/Composable';
import Mixin1 from '../../js-component-mixins/src/Mixin1';

class Component1 extends Composable(HTMLElement).compose(
  Mixin1
) {

  /*
   * Debugging utility: logs a message, prefixed by the component's tag.
   */
  log(text) {
    if (super.log) {super.log(text);}
    console.log(`${this.localName}: ${text}`);
  }

}

export default Component1;
