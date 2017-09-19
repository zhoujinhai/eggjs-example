'use strict'

// module.exports = app => {
// 	app.get('/','home');
// }

module.exports = app => {
	app.get('/',app.controller.home.index);
	app.get('/about',app.controller.about.my);
}