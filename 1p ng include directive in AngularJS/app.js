var myApp = angular
                .module('myModule', [])
                .controller('myController', function($scope){
                    var employees = [
                        { name: "Ben", gender: "Male", salary: 50000 },
                        { name: "Sara", gender: "Female", salary: 68000 },
                        { name: "Mark", gender: "Male", salary: 57000 },
                        { name: "Pam", gender: "Female", salary: 53000 },
                        { name: "Todd", gender: "Male", salary: 60000 }
                        
                    ];
                
                    $scope.employees = employees;
                    $scope.employeeView = "EmployeesTable.html";
                });