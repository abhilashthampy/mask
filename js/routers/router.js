/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// Todo Router
	// ----------

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
var viewObj = new View2({model:model2});
//var viewObj =new View2();
},
ShowView3:function(){
console.log("View3");
var viewObj =new View3();
},


})

var projectRouterObj =new ProjectRouter();

Backbone.history.start();
})();
