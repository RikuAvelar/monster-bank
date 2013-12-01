// Hey javascript, don't be stupid
'use strict';

// Create the app. The Array is a list of all "Parts" of the app
angular.module('monsterBankApp', [])

// Set up "Routes", the links between URLs and Code
  .config(function ($routeProvider) {
    $routeProvider
    // Self Explanatory, When you reach "/", load main.html as HTML, and attach it to Main.js
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
    // Self Explanatory, When you reach "/editor", load main.html as HTML, and attach it to Editor.js
      .when('/editor', {
        templateUrl: 'views/editor.html',
        controller: 'EditorCtrl'
      })
    // Otherwise (if the URL doesn't match anything above), redirect to "/"
      .otherwise({
        redirectTo: '/'
      });
  });
