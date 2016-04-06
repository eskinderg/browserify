//var init = require('./init');
var sinon = require('sinon');
//var Handlebars = require('handlebars');
var assert = require('chai').assert;
var should = require('should');
var expect = require('chai').expect;
var jsdom = require('mocha-jsdom');


var UserView = require('../views/UserView');

    jsdom();
//var server = require('../server');
describe('User View Test', function() {

  /*var init = RelatedBlogsView.prototype.initialize;
  var relatedBlogsView, relatedNewsArticleview;
*/
  before(function() {

    /*jsdom = require('jsdom');
    $ = require('jquery').create();
    global.jQuery = global.$ = jQuery;
    window = jsdom.jsdom().createWindow('');
    global.document = window.document;
    global.addEventListener = window.addEventListener*/

      //var vw = new UserView();

        //var backbone = require('backbone');
        //backbone.$ = require('jquery')(global.window);

        //var setFunc, add;*/
        //var relatedNewsArticleview = new RelatedNewsArticleView();



        UserView.prototype.initialize = function() {
          //setFunc = sinon.spy(this, 'set');
          //add = sinon.spy(this, 'add');
          //add.withArgs(relatedNewsArticleview);
        };
  });

  it('User View Testing ', function() {

    // definition


    var uv = new UserView();

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
