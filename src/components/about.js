module.exports = function about(app) {
  app.directive('about', function() {
    return {
      restrict: 'A',
      replace: true,
      templateUrl: './partials/about.tpl.html',
      controller: 'mainController'
    }
  });
};