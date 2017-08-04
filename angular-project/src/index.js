require("./assets/scss/main.scss");
var angular = require("angular")

var app = angular.module('tablaApp', []);

app.service('getData', function($http){
    var getData = function(){
        return $http.get('http://192.168.1.55/examenwebapi/api/person').then(function(response){
            return response.data;
        })
    }

    return {
        data: getData
    } 
});

app.controller("tableCtrl", function ParentCtrl ($scope, getData){
    getData.data().then(function(data){
        $scope.dataJson = data;
    });
    $scope.$on('child', function(event, data){
        $scope.dataJson.push(data);
        console.log(data);
    });
});

app.controller("modalCtrl", function($scope, getData){
    $scope.user = {
        Firstname: '',
        Id: '',
        Lastname: '',
        Cellphone: ''
    }
    $scope.saveData = function(){
        $scope.$emit('child', $scope.user);
    }
});
