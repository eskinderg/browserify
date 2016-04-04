
var $ = require('jquery');

var button = require('./buttons/button');

$('body').append(button);

var helper = require('./helper/helper.js');

console.log(helper(4,7));

var user = require('./user');

var esk = new user();

esk.set({name:'eskinder'});

console.log(esk.get('name'));

var userView = require('./views/userView');

console.log(userView);
