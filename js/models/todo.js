/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// Todo Model
	// ----------

	// Our basic **Todo** model has `title`, `order`, and `completed` attributes.
var Parameter = Backbone.Model.extend({
    urlRoot: 'http://tedemohonda.pythonanywhere.com/getData',
});

// create an instance of that model class
var model = new Parameter();

// make the async API request
model.fetch({

    success: function(){
	       
        console.log(model.attributes.ParameterInfo[0].ParamName);
		console.log(model.attributes.ParameterInfo[0].ParamValue);
		//alert(model.attributes.ParameterInfo[0].ParamName);
	    //self.render();
	    $('#data').html(model.attributes.ParameterInfo[0].ParamName);
		if(model.attributes.ParameterInfo[0].ParamName === "TP SENSOR"){
		document.getElementById("data").style.backgroundColor = "lightblue";
		}
		$('#value').html(model.attributes.ParameterInfo[0].ParamValue);
		//$(this.el).html("Hello TutorialsPoint!!!");
		// this.$el.html("Hello TutorialsPoint!!!"+model.attributes.ParameterInfo[0].ParamName);
		// $(this.el).html(model.attributes.ParameterInfo[0].ParamName)
    }
}); 
// create an instance of that model class
var model2 = new Parameter();

var Employee = Backbone.Model.extend({  
  
defaults: {  
name: 'anurag',  
age : 24,  
position : 'phpDeveloper'   
},  
  
});  
var Shriss = new Employee(); // new object created  
  
console.log( Shriss.get('name')); // will display the name  
console.log( Shriss.get('age')); // will display the age  
console.log( Shriss.get('position')); // will display the position 
function myFunction() {
  Shriss.set('name', document.getElementById("name").value) // this will update the name  
  Shriss.set('age', document.getElementById("age").value ) // update the age  
  Shriss.set('position',  document.getElementById("position").value) // will update the position  
  console.log( 'Updated values'); 	

console.log( Shriss.get('name')); // will display the name  
console.log( Shriss.get('age')); // will display the age  
console.log( Shriss.get('position')); // will display the position
}

	


Shriss.destroy(); 
/*
console.log( Shriss.get('name')); // will display the name  
console.log( Shriss.get('age')); // will display the age  
console.log( Shriss.get('position')); // will display the position
*/
		 
var ParameterInfoCollection = Backbone.Collection.extend({
    model: Parameter,
    url: 'http://tedemohonda.pythonanywhere.com/getData'
});

var collection = new ParameterInfoCollection();

collection.fetch({
    success: function(){
        console.log(collection.models);
    }
});

// GET https://jsonplaceholder.typicode.com/posts/1










})();
