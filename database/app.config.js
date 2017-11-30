(function() {
  'use strict';

  angular.module('inboxV2').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider){

    // this line is optional
    $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: 'app',
        abstract: true,
        component: 'mainCtrl',
      })
      .state({
        name: 'test',
        url: '/',
        parent: 'app',
        component: 'inbox',
      })
      .state({
        name: 'onemessage',
        url: '/message/:id',
        component: 'mainCtrl'
      })

  }

}());
