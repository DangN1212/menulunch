let app = angular.module('menuapp', ['firebase'])

app.config(['$compileProvider', function($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
}]);

app.controller('menuController', function($scope, $firebaseObject, $firebaseArray) {
    let db = firebase.database(),
        index;
    $scope.show_loading = true;
    $scope.menu = $firebaseArray(db.ref('menu/'));

    $scope.addFood = function() {
        $scope.menu.$add({
            name: $scope.food_name,
            id: $scope.menu.length,
        });
    };
    $scope.removeFood = function(index) {
        console.log(index);
        let item = $scope.menu[index] + 1;
        $scope.menu.$remove(item);
    };

});