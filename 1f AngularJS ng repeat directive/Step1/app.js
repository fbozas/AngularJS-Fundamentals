var myApp = angular
                .module("myModule", [])
                .controller("myController", function($scope){
                    var employees = [
                        { firstname: "Panos", lastname: "Bozas", gender: "Male", salary: 55000 },
                        { firstname: "Sara", lastname: "Paul", gender: "Female", salary: 68000 },
                        { firstname: "Mark", lastname: "Holland", gender: "Male", salary: 57000 },
                        { firstname: "Panos", lastname: "Bozas", gender: "Male", salary: 58000 },
                        { firstname: "Todd", lastname: "Barber", gender: "Male", salary: 51000 },
                    ]
                
                    $scope.employees = employees;
                });