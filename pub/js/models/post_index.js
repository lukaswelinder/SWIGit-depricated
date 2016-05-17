// post index/overview module & controller

angular.module('swigit.post_index',[])
  .controller('indexCtrl',[
    '$scope',
    '$state',
    '$stateParams',
    'dataCtrl',
    function($scope,$state,$stateParams,dataCtrl) {
    //simulate json...
    $scope.posts = [
    {
      title: 'Post Title Sample...',
      author: 'Lukas Welinder',
      date: 'May 2, 2016',
      url_slug: 'random-postname',
      exerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh tortor, cursus mollis pellentesque quis, egestas eu lacus. Aenean rhoncus posuere interdum.'
    },{
      title: 'Post Title Sample...',
      author: 'Lukas Welinder',
      date: 'May 2, 2016',
      url_slug: 'random-postname',
      exerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh tortor, cursus mollis pellentesque quis, egestas eu lacus. Aenean rhoncus posuere interdum.'
    },{
      title: 'Post Title Sample...',
      author: 'Lukas Welinder',
      date: 'May 2, 2016',
      url_slug: 'random-postname',
      exerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh tortor, cursus mollis pellentesque quis, egestas eu lacus. Aenean rhoncus posuere interdum.'
    },{
      title: 'Post Title Sample...',
      author: 'Lukas Welinder',
      date: 'May 2, 2016',
      url_slug: 'random-postname',
      exerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh tortor, cursus mollis pellentesque quis, egestas eu lacus. Aenean rhoncus posuere interdum.'
    },
    ];
  }]);