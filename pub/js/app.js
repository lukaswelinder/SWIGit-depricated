
angular.module('ctrl',[])
  .controller('indexCtrl',['$scope',function($scope) {
    $scope.hello = 'Index';
  }])
  .controller('aboutCtrl',['$scope',function($scope) {
    $scope.hello = 'About';
  }])
  .controller('workCtrl',['$scope',function($scope) {
    $scope.hello = 'Work';
  }]);



angular.module('swigit', [
  'ui.materialize',
  'ui.router',
  'ctrl'])

.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {



  $stateProvider
    .state('index', {
        url: '/',
        templateUrl: '/views/post-index.html',
        controller: 'indexCtrl'
      })
    .state('about', {
        url: '/about',
        templateUrl: '/views/about.html',
        controller: 'aboutCtrl'
      })
    .state('work', {
        url: '/work',
        templateUrl: '/views/post-body.html',
        controller: 'workCtrl'
      });

    $locationProvider.html5Mode(true);

  // $httpProvider.interceptors.push('');
  // $httpProvider.interceptors.push('AttachTokens');


});














