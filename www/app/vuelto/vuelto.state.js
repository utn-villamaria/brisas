angular.module('brisas.pantallas')
.config(function($stateProvider) {
  $stateProvider
  .state('vuelto', {
    url: '/vuelto',
    templateUrl: 'app/vuelto/vuelto.html',
    controller: 'VueltoCtrl as vm',
    cache: false,
    resolve: {
      montoACobrar: function(CobroActual) {
        if (CobroActual.get().monto) {
          return CobroActual.get().monto;
        } else {
          throw 'CoAerror';
        }
      }
    }
  });
});
