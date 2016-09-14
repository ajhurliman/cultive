module.exports = function offerings(app) {
  app.directive('offerings', function() {
    return {
      restrict: 'A',
      replace: true,
      templateUrl: './partials/offerings.tpl.html',
      controller: 'mainController'
    }
  });
};