(function() {
  angular.module('brisas.pantallas').controller('CierreCajaCtrl', function($state, $scope, $ionicPopup, $ionicHistory, Caja) {
    var vm = this;
    vm.dinero = Caja.getCajaActual().dinero;

    vm.total = function() {
      var totalDin = 0;
      vm.dinero.forEach(function(dinero) {
        totalDin += dinero.cantidad * dinero.dinero.valor;
      });
      return totalDin;
    };

    vm.popupConfirmarCierre = function() {
      var dialogo = $ionicPopup.show({
        title: '<b>¿Realmente desea cerrar la caja?</b>',
        subTitle: '',
        scope: $scope,
        buttons: [{
          text: '',
          type: 'boton-grande button-balanced ion-checkmark-round',
          onTap: function(e) {
            return true;
          }
        }, {
          text: '',
          type: 'boton-grande button-assertive ion-close-round',
          onTap: function(e) {
            dialogo.close();
          }
        }]
      });

      dialogo.then(function(confirma) {
        if (confirma) {
          Caja.cerrarCaja();
          $ionicHistory.nextViewOptions({
            historyRoot: true
          })
          $state.go('inicioCajaBillete');
        }
      });
    };
  });
})();
