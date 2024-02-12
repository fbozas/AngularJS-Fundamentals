var app = angular
        .module("myModule", [])
        .controller("myController", function ($scope, $http) {

            $http.get("http://localhost:55113/EmployeeService.asmx/GetAllEmployees")
                 .then(function (response) {
                     $scope.employees = response.data;
                 });
        });