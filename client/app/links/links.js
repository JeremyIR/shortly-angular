angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here

  $scope.data = {};
  Links.getAll().then( function (links) {
    $scope.data.links = links;
    return links;
  });

  $scope.addOne = function () {
    Links.addOne($scope.link).then(function(data) {

    })
    .catch(function (error) {
      console.error(error);
    });
  };
});
