import Composable from '../../js-component-mixins/src/Composable';
import Mixin1 from '../../js-component-mixins/src/Mixin1';

class Component1 extends Composable(HTMLElement).compose(
  Mixin1
) {

  createdCallback() {
    if (super.createdCallback) { super.createdCallback(); }

    // Check for the existence on the host page of the createdCallbackComplete method
    // and call it if it exists
    if (window.createdCallbackComplete) {
      window.createdCallbackComplete();
    }
  }

  /*
   * Debugging utility: logs a message, prefixed by the component's tag.
   */
  log(text) {
    if (super.log) {super.log(text);}
    console.log(`${this.localName}: ${text}`);
  }

}

document.registerElement('js-component-1', Component1);
export default Component1;
