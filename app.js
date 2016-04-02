alert("sample alert");

var $ = require('jquery');

var button = $('<button/>').html('Click Me').on('click',function(){
	alert('clicked');
	});
$('body').append(button);





