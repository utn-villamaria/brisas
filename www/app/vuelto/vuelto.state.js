angular.module('brisas.pantallas', ['ionic'])
.config(function($stateProvider) {
  $stateProvider
  .state('vuelto', {
    url: '/vuelto',
    templateUrl: 'app/vuelto/vuelto.html',
    controller: 'VueltoController'
  });
});
