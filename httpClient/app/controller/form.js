'use strict';

module.exports = function* form(ctx){
	const result = yield ctx.curl('https://httpbin.org/post', {
		method: 'POST',
		//不设置contentType,httpClient会默认application/x-www-form-rulencoded格式发送请求
		data: {
			now: Date.now(),
			foo: 'bar',
		},
		dataType: 'json',
	});
	ctx.body = result.data.form;
};