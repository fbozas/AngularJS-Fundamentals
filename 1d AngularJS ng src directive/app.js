var myApp = angular
                .module("myModule", [])
                .controller("myController", function($scope){
                    var country = {
                        name: "USA",
                        capital: "Washington D.C",
                        flag: "Images/usa-flag.jpg"
                    };
                
                    $scope.country = country;
                });