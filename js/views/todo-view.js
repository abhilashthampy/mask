/*global Backbone, jQuery, _, ENTER_KEY, ESC_KEY */
var app = app || {};

(function ($) {
	'use strict';

	
         
 var View1 = Backbone.View.extend ({
            // el - stands for element. Every view has an element associated with HTML content, will be rendered.
            el: '#container',
     
           

            // It's the first function called when this view is instantiated.
            initialize: function() {
				 this.$el.html('This is v1 Running<button> <a href ="/#/View2">View2</a></button><button > <a href ="/#/View3">View3</a></button>'); 
            },

           
            // $el - it's a cached jQuery object (el), in which you can use jQuery functions to push content.
           
            //Like the Hello TutorialsPoint in this case.
          
         });
       
 var View2 = Backbone.View.extend ({
            // el - stands for element. Every view has an element associated with HTML content, will be rendered.
            el: '#container',
     
           

            // It's the first function called when this view is instantiated.
            initialize: function() {
				//this.render;  
				
				this.$el.html('This is v2 Running<button > <a href ="">View1</a></button><button ><a href ="/#/View3">View3</a></button>'); 

            },
           
            // $el - it's a cached jQuery object (el), in which you can use jQuery functions to push content.
           
            //Like the Hello TutorialsPoint in this case.
          
         });

 var View3 = Backbone.View.extend ({
            // el - stands for element. Every view has an element associated with HTML content, will be rendered.
            el: '#container',
     
           

            // It's the first function called when this view is instantiated.
            initialize: function() {
					 this.$el.html('This is v3 Running<button > <a href ="">View1</a></button><button > <a href ="/#/View2">View2</a></button>'); 
				 
            },
           
            // $el - it's a cached jQuery object (el), in which you can use jQuery functions to push content.
           
            //Like the Hello TutorialsPoint in this case.
        
         });


var ProjectRouter =Backbone.Router.extend({
routes:{
"":"ShowView1",
"View2":"ShowView2",
"View3":"ShowView3"
},
ShowView1:function(){
console.log("View1");
var viewObj =new View1();
},
ShowView2:function(){
console.log("View2");
//var viewObj = new View2({model:model2});
var viewObj =new View2();
},
ShowView3:function(){
console.log("View3");
var viewObj =new View3();
},


})

var projectRouterObj =new ProjectRouter();

Backbone.history.start();

})(jQuery);
