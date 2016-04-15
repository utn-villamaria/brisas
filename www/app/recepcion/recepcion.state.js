angular.module('brisas.pantallas')
.config(function($stateProvider) {
  $stateProvider
  .state('recepcion', {
    url: '/recepcion',
    templateUrl: 'app/recepcion/recepcion.html',
    controller: 'RecepcionCtrl as vm',
    resolve: {
      dinero: function(Dinero) {
        return Dinero.getDinero().then(function(response) {
          return response.data;
        });
      }
    }
  });
});
