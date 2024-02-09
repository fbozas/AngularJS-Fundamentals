var myApp = angular
                .module("myModule", [])
                .controller("myController", function($scope){
                    var employees = [
                        { name: "Ben", gender: 1, city: "London", salary: 50000 },
                        { name: "Sara", gender: 2,  city: "Chennai", salary: 68000 },
                        { name: "Mark", gender: 1,  city: "Chicago", salary: 57000 },
                        { name: "Pam", gender: 2,  city: "London", salary: 53000 },
                        { name: "Todd", gender: 3,  city: "Chennai", salary: 60000 }                        
                    ]
                
                    $scope.employees = employees;
                });