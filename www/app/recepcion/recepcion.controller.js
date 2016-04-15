(function(){

  angular.module('brisas.pantallas').controller('RecepcionCtrl', RecepcionCtrl);

  function RecepcionCtrl(CobroActual, dinero) {

    var vm = this;

    vm.finDeRecepcion = finDeRecepcion;

    vm.agregarDinero = agregarDinero;

    vm.quitarDinero = quitarDinero;

    function agregarDinero(dinero) {
      vm.seleccionados.push(dinero);
    }

    function quitarDinero(i) {
      vm.seleccionados.splice(i,1);
    }

    function finDeRecepcion() {
      CobroActual.get().dineroRecibido = vm.seleccionados;
    }

    vm.seleccionados = [];

    vm.dinero = dinero;

  }

})();
