// post body/content module & controller

angular.module('swigit.post_body',[])
  .controller('postCtrl',[
    '$scope',
    '$state',
    '$stateParams',
    'dataCtrl',
    function($scope,$state,$stateParams,dataCtrl) {
      // console.log(dataCtrl.hash);
      // console.log(dataCtrl.db.hash[$stateParams.url_slug]);
      $scope.post = dataCtrl.db.hash[$stateParams.url_slug];
    }]);