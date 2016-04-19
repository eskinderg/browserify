requirejs.config({
  baseUrl: '/', //pointing to application/js/lib

  paths: {
    text: 'js/lib/text'
  },

  shim: {
    'js/lib/underscore-min': {
      exports: '_'
    },
    'js/lib/backbone': {
      deps: ['js/lib/underscore-min']
    , exports: 'Backbone'
    },
    'app': {
      deps: ['js/lib/underscore-min', 'js/lib/backbone', 'js/lib/jquery.sortable']
    }
  }
});

require([
  'app'
],

function(App) {
  window.BNAApp = new App();
});
