//var init = require('./init');
var sinon = require('sinon');
//var Handlebars = require('handlebars');
var assert = require('chai').assert;
var should = require('should');
var expect = require('chai').expect;
var jsdom = require('mocha-jsdom');

//console.log(jsdom);

var UserView = require('../views/UserView');

//var bundle = require('../bundle.js');

jsdom();

//var server = require('../server');
describe('User View Test', function() {

  /*var init = RelatedBlogsView.prototype.initialize;
  var relatedBlogsView, relatedNewsArticleview;
*/
  before(function() {
    var $ = global.jQuery = jQuery= require('jquery')(global.window);
    var backbone = require('backbone');
    backbone.$ = $;//require('jquery')(global.window);

    /*jsdom = require('jsdom');*/


    /*var $ = require('jquery')(global.window);
    var Backbone = require('backbone');
    Backbone.$ = $;*/

      //var vw = new UserView();

        /*$ = global.jQuery = require('jquery')(window);
        var backbone = require('backbone');
        backbone.$ = $;//require('jquery')(global.window);
        */
          var render;
        /*
        //var setFunc, add;*/
        //var relatedNewsArticleview = new RelatedNewsArticleView();

        //document.body.innerHTML += "<div id='test'>hola</div>";
        //document.body.innerHTML += "<input type='text' value='eskkkkkkk' id='input'/>";

        window.document.body.innerHTML += "<button id='add-input'>Add Friend</button>";
        //document.body.innerHTML += "<ul id='friends-list'></ul>";


        window.document.body.innerHTML += "<div id='test'>hola</div>";

        //$('body').append( "<div id='test'>hola</div>");
        //$('body').append( "<input type='text' value='eskkkkkkk' id='input'/>");
        //$('body').append( "<button id='add-input'>Add Friend</button>");
        $('body').append( "<ul id='friends-list'></ul>");

        UserView.prototype.initialize = function() {
          //setFunc = sinon.spy(this, 'set');
            render = sinon.spy(this, 'render');
          //add.withArgs(relatedNewsArticleview);

        };

        //this.renderSpy = sinon.spy(UserView.prototype,'render')
  });

  it('User View Testing ', function() {

    // definition
    //var div = document.createElement('div');


      //console.log($('body').html());
      //console.log(document.body.innerHTML);
      //expect($("div").html()).eql('hola');

      var $ = global.jQuery = jQuery= require('jquery')(window);
      //$.window = window;
      var backbone = require('backbone');
      backbone.$ = $;
      console.log(window.document.body);
      var uv = new UserView({el:'body'});
      //var v = uv.render();
      //var rrender = sinon.spy("uv","render");

      $('#add-input').click();
      //$('#add-input').click();
      //console.log($('#test').html());
      //console.log($('#friends-list').html());


      console.log($('body').html());




    //console.log($('#add-input'));

    //console.log($('#add-input').text());


    //console.log(uv);
    //uv.render();


    /*var relatedBlogsView = new RelatedBlogsView();
    var spy = sinon.spy(relatedBlogsView, "set");
    var spyShow = sinon.spy(relatedBlogsView, "show");

    relatedBlogsView.set(["asdfasdf"]);

    relatedBlogsView.render();
    console.log("The show function on the Related Blogs view has been called " + spyShow.callCount + " times");
    console.log(relatedBlogsView.$el);
    expect(relatedBlogsView).to.not.be.undefined;
*/
  });

});
