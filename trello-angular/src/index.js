require("./assets/scss/main.scss");
var angular = require("angular");
var template = require("ngtemplate-loader!html-loader!./templates/init-app.html");
var tableTemplate = require("ngtemplate-loader!html-loader!./templates/card-box.html");

function boxInitial($scope) {
	var ctrl = this;
	$scope.class = "";
	$scope.changeClass = function(){
		if ($scope.class === "active") {
			$scope.class = ""
		} else {
			$scope.class = "active"
		}
		
	}
	$scope.elemento = "<h1>hola</h1>";
	$scope.addTable = function(){
		console.log("click")
		$scope.getTemplateUrl = function(){
			return tableTemplate
		}
		// $scope.$emit('tableTemplate', tableTemplate);
	}
}

function table ($scope) {
	var prueba = "<h1>Holi</h1>"
	$scope.getTemplateUrl = ''
	$scope.$on('tableTemplate', function(event, data){
		console.log(data)
		$scope.getTemplateUrl = tableTemplate
	})
	// return tableTemplate
}
angular.module('trello', [])
	.component('initial', {
		templateUrl: template,
		controller: boxInitial
	})
	.component('prueba', {
		template: '<ng-include src="elemento"/>',
		controller: boxInitial
	})


	// require("./table.js");