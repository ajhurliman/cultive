module.exports = function(app) {
  app.directive('reviews', function() {
    return {
      restrict: 'A',
      replace: true,
      templateUrl: './partials/reviews.tpl.html',
      controller: 'mainController'
    }
  });
};