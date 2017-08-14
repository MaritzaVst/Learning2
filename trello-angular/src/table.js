function tableCreate ($scope) {
    debugger
	// $scope.getTemplateUrl = function(){
	// 	return prueba
	// 	$scope.$on('tableTemplate', function(event, data){
	// 		return data
	// 	})
	// }
}

angular.module('trello', [])
	.component('insert-table', {
		template: "<h1>Holi</h1>",
		controller: tableCreate
	})