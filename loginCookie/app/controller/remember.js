'use strict';

module.exports = function*(){
	const time = 60000; //一分钟
	if(this.request.body.remember) {
		this.cookies.set('remember',1,{maxAge: time});
	}
	this.redirect('/');
}