angular.module('brisas.pantallas')
.config(function($stateProvider) {
  $stateProvider
  .state('vuelto', {
    url: '/vuelto',
    templateUrl: 'app/vuelto/vuelto.html',
    controller: 'VueltoController'
  });
});
