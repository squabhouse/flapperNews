
var app = angular.module('flapperNews', []);


app.controller('Ctrl', function($scope) {
	$scope.posts = [];

	$scope.addPost = function() {
		if (!$scope.title || $scope.title === '') {return;}
		$scope.posts.push({
			title: $scope.title, 
			link: $scope.link,
			upvotes: 0}
		);

		$scope.title = '';
		$scope.link = '';
	};

	$scope.incrementUpvotes = function(post) {
		post.upvotes += 1;
	};

});
