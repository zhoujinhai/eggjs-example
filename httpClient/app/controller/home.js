'use strict';

module.exports = function* home(ctx) {
	const result = yield ctx.curl('https://registry.npm.taobao.org/egg/latest',{
		dataType: 'json',
		timeout: 3000,
	});

	ctx.body = {
		status: result.status,
		headers: result.headers,
		package: result.data,
	};
};