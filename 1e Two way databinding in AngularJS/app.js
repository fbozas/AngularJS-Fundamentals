var myApp = angular
                .module("myModule", [])
                .controller("myController", function($scope){
                    // step 1 $scope.message = "Hello AngularJS";

                    //STEP 2
                    var employee = {
                        firstname: "Panos",
                        lastname: "Bozas",
                        gender: "Male"
                    };
                
                    $scope.employee = employee;
                });