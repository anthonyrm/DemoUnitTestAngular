angular.module('testingApp').controller('demoCtrl', [
    '$scope',
    function ($scope) {
    
    $scope.sumar = function () {

        $scope.tot = parseInt($scope.num1) - parseInt($scope.num2);
    }

    $scope.multiplicar = function () {

        $scope.tot = parseInt($scope.num1) * parseInt($scope.num2);
    }
}]);