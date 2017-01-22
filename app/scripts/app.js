'use strict';

/**
 * @ngdoc overview
 * @name firstAppApp
 * @description
 * # firstAppApp
 *
 * Main module of the application.
 */
angular
  .module('firstAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/");
    $locationProvider.hashPrefix('');

    $stateProvider
    .state('Main',
      {url: '/',
      views: {'views':
        {templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }
      }
    })
    .state('About',
        {url: '/about',
        views: {'views':
          {templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        }
        }
    });  
  });
