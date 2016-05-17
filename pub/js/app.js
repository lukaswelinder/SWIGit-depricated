
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

    $urlRouterProvider.deferIntercept();

  // $httpProvider.interceptors.push('');
  // $httpProvider.interceptors.push('AttachTokens');

})

.run(function ($rootScope, $urlRouter) {
 
  $rootScope.$on('$locationChangeSuccess', function(evt,curr,prev) {
    console.log(evt,curr,prev);
   // middleware for route changes
  });
 
  // Configures $urlRouter's listener *after* your custom listener
  $urlRouter.listen();
});














