// post body/content module & controller

angular.module('swigit.post_body',[])
  .controller('postCtrl',['$scope',function($scope) {
    $scope.hello = 'Post';
  }]);