module.exports = function* post(ctx){
	const result = yield ctx.curl('https://httpbin.org/post',{
		//get以外其他方式需指定method
		method: 'POST',
		//httpClient以json格式发送
		contentType: 'json',
		data: {
			hello: 'world',
			now: Date.now(),
		},
		//httpClient以json格式处理返回的数据
		dataType: 'json',
	});
	ctx.body = result.data;
};