(function() {

  angular.module('brisas.pantallas').controller('RecepcionCtrl', RecepcionCtrl);

  function RecepcionCtrl($state, $ionicPopup, CobroActual, Caja, dinero) {

    var vm = this;

    vm.finDeRecepcion = finDeRecepcion;

    vm.agregarDinero = agregarDinero;

    vm.quitarDinero = quitarDinero;
    vm.isDineroSuficiente = isDineroSuficiente;

    vm.montoRecibido = 0;

    function agregarDinero(dinero) {
      vm.montoRecibido = 0;
      vm.seleccionados.push(dinero);
      vm.seleccionados.forEach(function(dinero) {
        vm.montoRecibido += dinero.valor;
      });
    }

    function isDineroSuficiente() {
      if (vm.montoRecibido >= CobroActual.get().monto) {
        return true;
      } else {
        return false;
      }
    }

    function quitarDinero(i) {
      vm.montoRecibido = 0;
      vm.seleccionados.splice(i, 1);
      vm.seleccionados.forEach(function(dinero) {
        vm.montoRecibido += dinero.valor;
      });
    }

    function finDeRecepcion() {
      CobroActual.calcularVuelto(vm.seleccionados);
      if (CobroActual.get().vuelto) {
        $state.go('vuelto');
      } else {
        vm.mostrarInfo();
      }
    }

    vm.seleccionados = [];

    vm.dinero = dinero;

    vm.mostrarInfo = function() {
      $ionicPopup.alert({
        title: 'No hay dinero suficiente!',
        template: '<div class="text-center"><span class="ion-close-circled boton-grande assertive"></span></div>',
        okText: 'Aceptar'
      });

    }
  }

})();
