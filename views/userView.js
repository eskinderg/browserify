var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');


var user = require('../models/user');
var UserCollection = require('../collections/UserCollection');

var UserView = Backbone.View.extend({
    tagName: 'li',

    events:{
      'click #add-input' : 'getUser',
    },

    initialize: function() {
      var thisView = this;
      this.userList = new UserCollection();
      _.bindAll(this,'render');
      this.userList.bind("add",function(model){
          thisView.render(model);
      })},

      getUser: function(){
          var user_name = $('#input').val();
          this.userList.add({name: user_name});
      },

      render: function(model){
          $("#friends-list").append("<li>" + model.get("name") + "</li>");
          console.log("rendered");
      }
});

module.exports = UserView;
