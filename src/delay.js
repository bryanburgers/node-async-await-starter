'use strict';

export default function delay(ts, val) {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(val), ts);
	});
}
