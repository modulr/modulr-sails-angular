(function(){
  'use strict';

  angular
  .module('layout', [])
  .config(['$stateProvider', function($stateProvider){

    $stateProvider
    .state('layoutAuth', {
      abstract: true,
      templateUrl: 'app/layout/layoutAuth.html',
      controller: 'LayoutAuthCtrl'
    })
    .state('layout', {
      abstract: true,
      templateUrl: 'app/layout/layout.html',
      controller: 'LayoutCtrl'
    });

  }]);

}());
