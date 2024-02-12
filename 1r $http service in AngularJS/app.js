var app = angular
        .module("myModule", [])
        .controller("myController", function ($scope, $http, $log) {
            
            // STEP 1
            // $http(
            //     {
            //         method: 'GET', 
            //         url: "http://localhost:55113/EmployeeSaervice.asmx/GetAllEmployees"
            //     })
            //      .then(function (response) {
            //          $scope.employees = response.data;
            //          $log.info(response);
            //      },function(reason){
            //         $scope.error = reason.statusText;
            //         $log.info(reason);
            //      });

            // STEP 2
            var successCallback =function(response){
                $scope.employees = response.data;
            }
            var errorCallback =function(reason){
                $scope.error = reason.statusText;
            }

                 
            $http(
                {
                    method: 'GET', 
                    url: "http://localhost:55113/EmployeeService.asmx/GetAllEmployees"
                })
                 .then(successCallback,errorCallback);
        });
