
var $ = require('jquery');
var button = require('./buttons/button');
$('body').append(button);

var helper = require('./helper/helper.js');

alert(helper(10, 6));

console.log(helper(4,7));

