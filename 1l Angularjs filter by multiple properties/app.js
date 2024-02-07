var myApp = angular
                .module("myModule", [])
                .controller("myController", function($scope){
                    var employees = [
                        { name: "Ben", gender: "Male", salary: 50000 , city: "London"},
                        { name: "Sara", gender: "Female", salary: 68000  , city: "Chenai"},
                        { name: "Mark", gender: "Male", salary: 57000 , city: "London"},
                        { name: "Pam", gender: "Female", salary: 53000 , city: "Chenai"},
                        { name: "Todd", gender: "Male", salary: 60000 , city: "London" },
                        
                    ]
                
                    $scope.employees = employees;
                });