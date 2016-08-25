describe('demoControl', function () {

  beforeEach(module('testingApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('operaciones', function () {
		it('should sum 2 values', function () {
			var $scope = {};
			var controller = $controller('demoCtrl', { $scope: $scope });
			$scope.num1 = 1;
			$scope.num2 = 2;
			$scope.sum();
			expect($scope.tot).toBe(3);
		});

        it('should multiply 2 values', function () {
			var $scope = {};
			var controller = $controller('demoCtrl', { $scope: $scope });
			$scope.num1 = 1;
			$scope.num2 = 2;
			$scope.multiply();
			expect($scope.tot).toBe(2);
		});
	});

});