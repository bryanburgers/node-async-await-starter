'use strict';

const C = require('./dist/c').default;

const c = new C(1, 2);

c.getDelayedX().then(x => console.log(`getDelayedX: ${x}`));
c.getDelayedY().then(y => console.log(`getDelayedY: ${y}`));
c.getDelayedSum2().then(sum => console.log(`getDelayedSum2: ${sum}`));
