// post body/content module & controller

angular.module('swigit.post_body',[])
  .controller('postCtrl',['$scope','dataCtrl',function($scope,dataCtrl) {
    console.log(dataCtrl.db);
    $scope.hello = 'Post';
  }]);