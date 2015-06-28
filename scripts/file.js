
var app = angular.module("myApp", ['ngRoute'])

app.config(function($routeProvider){
//donne acces a plusieurs methodes
$routeProvider
	.when('/', {templateUrl: 'partials/home.html', controller: 'PostsCtrl'})
	.when('/comments/:id', {templateUrl: 'partials/comments.html',
		controller: 'CommentsCtrl'})
	.otherwise({redirectTo : '/'});
});

app.factory('PostFactory', function(){
	var factory = {
		posts : [
			{"id":"1", 
			"username":"Moussa", 
			"content": "je suis le boss cmlb"
			},
			 {"id":"2", 
			 "username":"Mounass",
			  "content": "je suis mouna la star"
			},
			  {"id":"3", 
			  "username":"taaw", 
			  "content": "boulenne ma fater thi niane"
			},
			 {"id":"4", 
			 "username":"thiaat", 
			  "content":"alllooo"
				}
		],
		getPosts: function(){
			return factory.posts;
		},
		getPost: function(id){
			var post = {};
			angular.forEach(factory.posts, function(value, key){
				if (value.id == id) {
					post = value
				}
			})
			return post;
		},
	}
	return factory;
})

app.controller('PostsCtrl', function($scope, PostFactory){

	$scope.posts = PostFactory.getPosts();

})

app.controller("CommentsCtrl", function($scope, PostFactory, $routeParams) {
var post = PostFactory.getPost($routeParams.id);
$scope.title = post.username;
$scope.content = post.content;
$scope.comments = post.comments;
//$scope.comments = PostFactory.getPost($routeParams.id).comments;
});