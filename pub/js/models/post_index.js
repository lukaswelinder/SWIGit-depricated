// post index/overview module & controller

angular.module('swigit.post_index',[])
  .controller('indexCtrl',[
    '$scope',
    '$state',
    '$stateParams',
    'dataCtrl',
    function($scope,$state,$stateParams,dataCtrl) {
      console.log(dataCtrl.db.arr);
      $scope.posts = dataCtrl.db.arr;

      
    // {
    //   title: 'Post Title Sample...',
    //   author: 'Lukas Welinder',
    //   date: 'May 2, 2016',
    //   url_slug: 'random-postname',
    //   exerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh tortor, cursus mollis pellentesque quis, egestas eu lacus. Aenean rhoncus posuere interdum.'
    // }
  }]);