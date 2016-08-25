angular.module('testingApp').controller('demoCtrl', [
    '$scope',
    function ($scope) {
    
    $scope.sum = function () {

        $scope.tot = parseInt($scope.num1) + parseInt($scope.num2);
    }

    $scope.multiply = function () {

        $scope.tot = parseInt($scope.num1) * parseInt($scope.num2);
    }
}]);