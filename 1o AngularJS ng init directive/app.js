var myApp = angular
                .module('myModule', [])
                .controller('myController', function($scope){
                    var countries = [
                        {
                            name: "UK",
                            cities: [
                                { name: "London" },
                                { name: "Manchester" },
                                { name: "Birmigham" }
                            ]
                        },
                        {
                            name: "USA",
                            cities: [
                                { name: "Los Angeles" },
                                { name: "Chicago" },
                                { name: "Houston" }
                            ]
                        },
                        {
                            name: "India",
                            cities: [
                                { name: "Hyderabad" },
                                { name: "Chennai" },
                                { name: "Mumbai" }
                            ]
                        },
                    ]

                    $scope.countries = countries;
                });