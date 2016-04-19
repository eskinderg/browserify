var $ = require('jquery');
var assert = require('chai').assert;
var should = require('should');
var expect = require('chai').expect;
//var BNAapp = require('../app');

var UserView = require('../views/UserView');

describe('User View Test', function() {


    before(function() {
          $('body').append( "<input type='text' value='data2' id='input'/>");
          $('body').append( "<button id='add-input'>Add Friend</button>");
          $('body').append( "<ul id='friends-list'></ul>");

          var v = new UserView({el:'body'});
    });


    it('DOM Element should have at least one element', function() {

      for(i=0;i<4;i++)
      $('#add-input').click();

      var count = $("#friends-list").children().size();
      assert.isAtLeast(count, 1, 'should have atleast one element');

    });
});
