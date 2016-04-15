angular.module('brisas.pantallas')
.config(function($stateProvider) {
  $stateProvider
  .state('recepcion', {
    url: '/recepcion',
    templateUrl: 'app/recepcion/recepcion.html',
    controller: 'RecepcionController'
  });
});
