'use strict';

const fs = require('fs');
module.exports = function* stream(ctx){
	//上传当前文件用于测试
	const fileStream = fs.createReadStream(__filename);
	//httpbin.org 不支持 stream 模式，使用本地stream 接口代替
	const url = `${ctx.protocol}://${ctx.host}/stream`;
	const result = yield ctx.curl(url,{
		method: 'POST',
		stream: fileStream,
	});
	ctx.status = result.status;
	ctx.set(result.headers);
	ctx.body = result.data;
};