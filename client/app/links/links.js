angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here

  $scope.getAll = function () {
    Links.getAll().then(function(data) {
      $scope.data = data;
    })
    .catch(function (error) {
      console.error(error);
    });
  };

  $scope.addOne = function () {
    Links.addOne($scope.link).then(function(data) {

    })
    .catch(function (error) {
      console.error(error);
    });
  };
});
