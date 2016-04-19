define([
 'sampleClass'
],

function(sampleClass) {
  var App = function() {
    this.sampleClass = new sampleClass();

  };

  App.prototype = {
    views: {},
    collections: {},
  };

  return App;
});
