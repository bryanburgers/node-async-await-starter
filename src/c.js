'use strict';

import delay from './delay';

export default class C {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	async getDelayedX() {
		return delay(500, this.x);
	}

	async getDelayedY() {
		return delay(500, this.y);
	}

	async getDelayedSum() {
		const x = await this.getDelayedX();
		const y = await this.getDelayedY();
		return x + y;
	}

	async getDelayedSum2() {
		const [x, y] = await Promise.all([this.getDelayedX(), this.getDelayedY()]);
		return x + y;
	}
}
