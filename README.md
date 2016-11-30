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

Test 1: Examines the time it takes for a method to be invoked where the method is common to the base component
class and each of its behaviors/mixins. Due to the way Polymer invokes behavior methods, the test invokes
the createdCallback method, which ensures that the component base class and each of its behaviors' implementation
of createdCallback (actually, under Polymer, create) is invoked. For native JavaScript components, the super
method is invoked to traverse the full prototype chain.

Test 2: Compares invoking a method deepest on the prototype chain for native JavaScript components against
a call on a Polymer behavior where behaviors are "flattened" in the object space.

## Instructions
* Clone the project
* npm install
* grunt build
* View index.html under a web server

## Some results

Running this test in 10 batches, with each batch consisting of 10,000 runs, gave us the following results.

Invoking a component's `createdCallback` (faster is better)

- Polymer: 610.23 milliseconds average over 10,000 runs
- JavaScript mixins: 288.531 milliseconds average over 10,000 runs

Invoking a method directly on prototype vs. on a deep prototype chain (faster is better)

- Polymer: 0.7185 milliseconds average over 10,000 runs
- JavaScript mixins: 0.7430 milliseconds average over 10,000 runs

Assuming our tests are reasonably conceived, the performance appears comparable, with native JavaScript performing significantly better than Polymer/behaviors on the component creation test. We do not see anything suggesting that the JavaScript mixin architecture has performance penalties that would negate the usefulness of the architecture.

YMMV
