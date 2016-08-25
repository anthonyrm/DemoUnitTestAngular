angular.module('testingApp', ['ngRoute']).
config(function demoRouteConfig($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'app/views/index.html'
        }).when('/test', {
            templateUrl: 'app/views/test.html',
            controller: 'demoCtrl'
        })
})