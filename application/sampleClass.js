define(function() {


	// ----------

	var sampleClass = Backbone.Model.extend({

		defaults: {
			title: '',
			completed: false
		},

		somefunction: function () {
			this.save({
				completed: !this.get('completed')
			});
		},

		initialize: function(){
			//alert(this.completed);
		}
	});

  return sampleClass;

});
