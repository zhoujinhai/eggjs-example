'use strict'

module.exports = app => {
	class AboutController extends app.Controller{
		*my(){
			this.ctx.body = '<h1>I am a man</h1></br><a href="/">返回主页</a>';
		}
	}
	return AboutController;
}