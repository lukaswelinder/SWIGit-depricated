// contact page module & controller

angular.module('swigit.about',[])
  .controller('aboutCtrl',['$scope',function($scope) {
    $scope.hello = 'About';
  }]);