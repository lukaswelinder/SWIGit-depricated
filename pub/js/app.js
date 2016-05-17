

angular.module('swigit', [
  'ui.materialize',
  'ui.router',
  'swigit.post_index',
  'swigit.post_body',
  'swigit.about',
  'swigit.work',
  'swigit.ctrl'])

.config(function($stateProvider, $urlRouterProvider, 
          $httpProvider, $locationProvider) {





  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('index', {
        url: '/',
        templateUrl: '/views/post-index.html',
        controller: 'indexCtrl'
      })
    .state('index.post', {
        url: 'post/:url_slug',
        templateUrl: '/views/post-body.html',
        controller: 'postCtrl'
      })
    .state('about', {
        url: '/about',
        templateUrl: '/views/about.html',
        controller: 'aboutCtrl'
      })
    .state('work', {
        url: '/work',
        templateUrl: '/views/work.html',
        controller: 'workCtrl'
      });


    $locationProvider.html5Mode(true);

    // $urlRouterProvider.deferIntercept();

  // $httpProvider.interceptors.push('');
  // $httpProvider.interceptors.push('AttachTokens');

})

.run(function ($rootScope, $urlRouter) {
  
  $rootScope.$on('$locationChangeStart', function(evt,next,curr) {
    $('.ui-view-body').hide();
    console.log(evt,next,curr);
  });
  $rootScope.$on('$locationChangeSuccess', function(evt,curr,prev) {
    $('.ui-view-body').fadeIn('slow');
    // console.log(evt,curr,prev);
  });


  // Configures $urlRouter's listener *after* your custom listener
  // $urlRouter.listen();
});














