$( document ).ready(function() {
    console.log( "ready!" );
	var Employee = Backbone.Model.extend({
		url:'/data.json'
		
	});

	
	var EmployeeCollection = Backbone.Collection.extend({
		model:Employee,
		url : "/data.json",
		initialize : function(){
			var self = this;
			this.fetch({
				success:function(data){
					//self.add(data.toJSON());
					console.log(self.toJSON());
				}
				
			});
		}
		
	});
	var objCollection = new EmployeeCollection();
	
	
	
	var ProjectView =Backbone.View.extend({
		el:"#container",
		template : _.template($("#tmpl-first").html()),
		collection:objCollection,
		index:1,
		events: {
          "click #addbtn": "addItem",        
        },
		initialize:function(){	
			this.render();
		},
		render:function(){
			var self = this;
				
			setTimeout(function(){self.$el.html(self.template({collection: self.collection.toJSON()})); }, 3000);
			
		},
		addItem:function(ev){
			var Employee5 =new Employee( {  
				name: $('#empname').val(),  
				age : $('#empage').val(),  
				position : $('#empposition').val(),
				empid : this.index++
			});
			console.log('place you api call for creating new employee');
			this.collection.add(Employee5); //replace this with api call
			this.render();
			
		},
		removeitem:function(ev,elm){
			console.log(elm);
		}
	});
	
	var specificUserView = Backbone.View.extend({
		el: '#container',// The element we defined in HTML
		events: {
			'click #saveUserDetails': 'saveUserDetails'
		},
		
		render: function(userId) {
			var self = this;
			var userDetails=null;
			if (userId) {
				 var _userModel = new Employee({ empid: userId });
				//var _userModel  =  objCollection.get({empid:1});	
				_userModel.fetch({
					data: {empid:userId},
					success: function (data) {
						console.log("................."+data.toJSON());
						
						_.each(data.toJSON(), function(user){
							if (user.empid == userId) {
								userDetails = user;
							}
							
						});
						
						
						var _userDetailTemplate = _.template($('#user-detail-template').html(),
							{ userDetails: userDetails });
						self.$el.html(_userDetailTemplate);
					}
				})
			}
		},
		saveUserDetails: function() {
			console.log("place your update api call here");
			route.navigate('', { trigger: true }); //move this line to api success
			
		}
	});
	
	var employeeDelete = Backbone.View.extend({
		
		render : function(userId){
			console.log('Place delete api call  here');
			/*
			$.ajax({
			  method: "POST",
			  url: "/api/user/delete",
			  data: { empid: userId }
			})
			  .done(function( msg ) {
				route.navigate('', { trigger: true }); 
			 });
			*/
			route.navigate('', { trigger: true }); //move this line to api success
			
		},
	});
	
	var Router = Backbone.Router.extend({
		routes: {
			'': 'home',//Default route, when no hash tag is available
			'edit/:id': 'edit',
			'delete/:id': 'delete'
		}
	
	});
	
	var route = new Router();
	// When hash tag has localhost# register the below route
	route.on('route:home', function () {
		
		var projectObj = new ProjectView();
	});
	
	//When hash tag has localhost#edit register the below route
	route.on('route:edit', function (userId) {
		var _objUserEdit = new specificUserView();
		_objUserEdit.render(userId);
	});
	
	//When hash tag has localhost#delete register the below route
	route.on('route:delete', function (userId) {
		var _objUserDelete = new employeeDelete();
		_objUserDelete.render(userId);
	})
	
	 Backbone.history.start();
	
	
	
	
	
});