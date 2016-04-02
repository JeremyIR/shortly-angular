angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here

  $scope.data = {};
  Links.getAll().then( function (links) {
    console.log('controller Links ++++++=====',links);
    $scope.data.links = links;
    return links;
  });
  // $scope.getAll = function () {
  //   Links.getAll().then(function(data) {
  //     $scope.data.links = data;
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });
  // };

  $scope.addOne = function () {
    Links.addOne($scope.link).then(function(data) {

    })
    .catch(function (error) {
      console.error(error);
    });
  };
});
