# wc-perf
Performance comparisons between Polymer 1.0 components with behaviors versus raw JavaScript components with mixins

## Overview
This project demonstrates performance characteristics of invoking methods on a deep prototype chain, as provided
by a native, ES2015 JavaScript approach in applying mixins to a base class, in comparison to the behavior mechanism
encoded in the Polymer 1.0 codebase.

The tests make use of two components: one built with Polymer 1.0 that includes 20 behavior objects, and the
other built with native JavaScript techniques and 20 mixin objects. The JavaScript techniques are described
[here](https://component.kitchen/blog/posts/building-web-components-from-a-loose-framework-of-mixins) and
[here](https://component.kitchen/blog/posts/implementing-web-component-mixins-as-functions).

The first test examines the time it takes for a method to be invoked where the method is common to the base component
class and each of its behaviors/mixins. Due to the way Polymer invokes behavior methods, the test invokes
the createdCallback method, which ensures that the component base class and each of its behaviors' implementation
of createdCallback (actually, under Polymer, create) is invoked. For native JavaScript components, the super
method is invoked to traverse the full prototype chain.

The second test compares invoking a method deepest on the prototype chain for native JavaScript components against
a call on a Polymer behavior where behaviors are "flattened" in the object space.

## Instructions
* Clone the project
* npm install
* grunt build
* View index.html under a web server

