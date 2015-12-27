'use strict';

import C from '../src/c';
import * as assert from 'assert';

describe('C', () => {
	it('getDelayedX', async function() {
		const c = new C(1, 2);
		const x = await c.getDelayedX();
		assert.equal(x, 1);
	});
	it('getDelayedY', async function() {
		const c = new C(1, 2);
		const y = await c.getDelayedY();
		assert.equal(y, 2);
	});
	it('getDelayedSum', async function() {
		const c = new C(1, 2);
		const sum = await c.getDelayedSum();
		assert.equal(sum, 3);
	});
	it('getDelayedSum2', async function() {
		const c = new C(1, 2);
		const sum = await c.getDelayedSum2();
		assert.equal(sum, 3);
	});
});
