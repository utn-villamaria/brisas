angular.module('brisas.pantallas')
.config(function($stateProvider) {
  $stateProvider
  .state('seleccionar-productos', {
    url: '/seleccionar-productos',
    templateUrl: 'app/seleccionar-productos/seleccionar-productos.html',
    controller: 'SeleccionarProductosCtrl as vm',
    cache: false
  });
});
