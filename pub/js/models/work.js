// work module & controller

angular.module('swigit.work',[])
  .controller('workCtrl',['$scope',function($scope) {
    $scope.hello = 'Work';
  }]);