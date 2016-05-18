// post body/content module & controller

angular.module('swigit.post_body',[])
  .controller('postCtrl',[
    '$scope',
    '$state',
    '$stateParams',
    'dataCtrl',
    function($scope,$state,$stateParams,dataCtrl) {
      console.log(dataCtrl.db);
      $scope.post = dataCtrl.db[$stateParams.url_slug];
    }]);