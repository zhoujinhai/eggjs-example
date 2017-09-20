'use strict';

module.exports = function* get(ctx) {
	const result = yield ctx.curl('https://httpbin.org/get?foo=bar');
	ctx.status = result.status;
	ctx.set(result.headers);
	ctx.body = result.data;
}