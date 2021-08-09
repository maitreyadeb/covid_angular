// alert("Testing..");
const URL = "https://covid19.mathdro.id/api";
const COUNTRY_URL="https://covid19.mathdro.id/api/countries/";
let app = angular.module("MyApp",[]);
app.controller("MyCtrl",($scope,$http)=>{
    $scope.test = "COVID-19 Tracker"; 

    // $scope.chngValue = ()=>{
    //     $scope.test = "Stay Safe!!!";
    // };

    console.log("App Loaded.");
    //Default//All
    $http.get(URL).then(
    //success
    (response)=>{
        console.log("Inside Success.");
        console.log(response.data);
        $scope.all_data = response.data;
    },
    //error
    (error)=>{
        console.log(error);
    });

    //getCountryData//function
    $scope.getCountryData = ()=>{
        console.log("Inside getCountryData.");
        if($scope.inputCountry == ""){
            return;
        }
        $http.get(COUNTRY_URL+$scope.inputCountry).then(
            //success
            (response)=>{
                console.log("Inside Success.");
                console.log(response.data);
                $scope.all_data = response.data;
            },
            //error
            (error)=>{
                console.log(error);
            });
    };
});