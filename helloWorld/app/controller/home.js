'use strict'

module.exports = app => {
	class HomeController extends app.Controller{
		*index(){
			this.ctx.body = '<h1>hello world</h1></br><a href="/about">点击跳转</a>';
		}
	}
	return HomeController;
}

// module.exports = function* (){
// 	this.body = "<h1>hello world</h1>";
// }