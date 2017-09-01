let app = angular.module('menuapp', ['firebase'])

app.config(['$compileProvider', function($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
}]);

app.controller('menuController', function($scope, $firebaseObject, $firebaseArray) {
    let db = firebase.database(),
        idFood = $('#name'),
        inputFood = $('.input_food'),
        index;
    $scope.show_loading = true;
    $scope.menu = $firebaseArray(db.ref('menu/'));

    $scope.addFood = function() {
        $scope.menu.$add({
            name: $scope.food_name,
            count: '0',
            check: 'false'
        }).then(function() {
            inputFood.val('');
        });
    };
    $scope.removeFood = function(index) {
        $scope.menu.$remove($scope.menu.$getRecord(index));
    };
    $scope.addMenu = function() {

    };

});