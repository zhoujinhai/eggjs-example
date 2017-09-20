'use strict';

module.exports = function* del(ctx){
	const result = yield ctx.curl('https://httpbin.org/delete',{
		method: 'PUT',
		dataType: 'json',
	});
	ctx.body = result.data;
};