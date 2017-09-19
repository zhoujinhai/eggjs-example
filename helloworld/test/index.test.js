'use strict'

const request = require('supertest');
const mm = require('egg-mock');

describe('example helloworld test',() => {
	let app;

	before(() => {
		app = mm.app();
		return app.ready();
	});

	after(() => {
		app.close();
	});

	it('should GET/200',() => {
		return request(app.callback())
			.get('/')
			.expect(200)
			.expect('<h1>hello world</h1></br><a href="/about">点击跳转</a>');
	});

	it('should GET/200',() => {
		return request(app.callback())
			.get('/about')
			.expect(200)
			.expect('<h1>I am a man</h1></br><a href="/">返回主页</a>');
	});
});