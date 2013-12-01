// Hey javascript, don't be stupid
'use strict';

// Get the app, and create a new "Controller", the backend of the editor
angular.module('monsterBankApp')
  .controller('EditorCtrl', function ($scope) {
  	// $scope refers to the actual running page. Let's say that it's the editor itself, change data here and it will change in the frontend

  	// One thing that will be needed to do is setting up models
  	// That means basically declaring variables so that you can use them up front
  	// eg.  $scope.character = {}
  	//		$scope.character.age = 20

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
