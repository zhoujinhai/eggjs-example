'use strict';

const FormStream = require('formstream');

module.exports = function* multipart(ctx){
	const form = new FormStream();
	//设置普通的key value
	form.field('foo','bar');
	//上传当前文件本身用于测试
	form.file('file',__filename);

	const result = yield ctx.curl('https://httpbin.org/post',{
		method: "POST",
		headers: form.headers(),
		stream: form,
		dataType: 'json',
	});
	ctx.body = result.data.files;
};