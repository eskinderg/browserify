
var Backbone = require('backbone');

var user = Backbone.Model.extend({
	defaults:{
		name:'unknown',
		age: 50
	}
});

module.exports = user;
