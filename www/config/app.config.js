angular.module('brisas').config(config);

function config($urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

}
