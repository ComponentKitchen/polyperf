import Composable from '../../js-component-mixins/src/Composable';
import Mixin1 from '../../js-component-mixins/src/Mixin1';
import Mixin2 from '../../js-component-mixins/src/Mixin2';
import Mixin3 from '../../js-component-mixins/src/Mixin3';
import Mixin4 from '../../js-component-mixins/src/Mixin4';
import Mixin5 from '../../js-component-mixins/src/Mixin5';
import Mixin6 from '../../js-component-mixins/src/Mixin6';
import Mixin7 from '../../js-component-mixins/src/Mixin7';
import Mixin8 from '../../js-component-mixins/src/Mixin8';
import Mixin9 from '../../js-component-mixins/src/Mixin9';
import Mixin10 from '../../js-component-mixins/src/Mixin10';
import Mixin11 from '../../js-component-mixins/src/Mixin11';
import Mixin12 from '../../js-component-mixins/src/Mixin12';
import Mixin13 from '../../js-component-mixins/src/Mixin13';
import Mixin14 from '../../js-component-mixins/src/Mixin14';
import Mixin15 from '../../js-component-mixins/src/Mixin15';
import Mixin16 from '../../js-component-mixins/src/Mixin16';
import Mixin17 from '../../js-component-mixins/src/Mixin17';
import Mixin18 from '../../js-component-mixins/src/Mixin18';
import Mixin19 from '../../js-component-mixins/src/Mixin19';
import Mixin20 from '../../js-component-mixins/src/Mixin20';

class Component1 extends Composable(HTMLElement).compose(
  Mixin1,
  Mixin2,
  Mixin3,
  Mixin4,
  Mixin5,
  Mixin6,
  Mixin7,
  Mixin8,
  Mixin9,
  Mixin10,
  Mixin11,
  Mixin12,
  Mixin13,
  Mixin14,
  Mixin15,
  Mixin16,
  Mixin17,
  Mixin18,
  Mixin19,
  Mixin20
) {

  createdCallback() {
    if (super.createdCallback) { super.createdCallback(); }
  }

}

document.registerElement('js-component-1', Component1);
export default Component1;
