(function(){

  angular.module('brisas.pantallas').controller('RecepcionCtrl', RecepcionCtrl);

  function RecepcionCtrl($state, CobroActual, Caja, dinero) {

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
      CobroActual.calcularVuelto(vm.seleccionados);
      if (CobroActual.get().vuelto) {
        $state.go('vuelto');
      } else {
        alert('No se puede dar vuelto para ese dinero');
      }
    }

    vm.seleccionados = [];

    vm.dinero = dinero;

    Caja.abrirCaja([
      {
          "dinero": {
            "id": 10,
            "valor": 2.0,
            "imagen": "components/dinero/imagenes/2.jpg",
            "esMoneda": false
          },
          "cantidad": 4
        },
        {
          "dinero": {
            "id": 8,
            "valor": 5.0,
            "imagen": "components/dinero/imagenes/5.jpg",
            "esMoneda": false
          },
          "cantidad": 15
        },
        {
          "dinero": {
            "id": 6,
            "valor": 10.0,
            "imagen": "components/dinero/imagenes/10.jpg",
            "esMoneda": false
          },
          "cantidad": 10
        },
        {
          "dinero": {
            "id": 14,
            "valor": 0.25,
            "imagen": "components/dinero/imagenes/25cm.jpg",
            "esMoneda": true
          },
          "cantidad": 10
        },
        {
          "dinero": {
            "id": 15,
            "valor": 0.10,
            "imagen": "components/dinero/imagenes/10cm.jpg",
            "esMoneda": true
          },
          "cantidad": 10
        }
    ]);

  }

})();
