module.exports = function* put(ctx){
	const result = yield ctx.curl('https://httpbin.org/put',{
		method: 'PUT',
		contentType: 'json',
		data: {
			update: 'foo bar',
		},
		dataType: 'json',
	});
	ctx.body = result.data;
}