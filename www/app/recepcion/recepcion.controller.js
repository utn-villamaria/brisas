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
            "imagen": "components/dinero/imagenes/mitre.jpg",
            "esMoneda": false
          },
          "cantidad": 4
        },
        {
          "dinero": {
            "id": 9,
            "valor": 5.0,
            "imagen": "components/dinero/imagenes/san_martin_nuevo.jpg",
            "esMoneda": false
          },
          "cantidad": 15
        },
        {
          "dinero": {
            "id": 7,
            "valor": 10.0,
            "imagen": "components/dinero/imagenes/belgrano_nuevo.jpg",
            "esMoneda": false
          },
          "cantidad": 10
        },
        {
          "dinero": {
            "id": 14,
            "valor": 0.25,
            "imagen": "components/dinero/imagenes/moneda_25.jpg",
            "esMoneda": true,
            "imagen": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRAUz8nBeKe0LvACjldSwGZUUbBOAX-v020Zk78ujMXlfvjnAbS"
          },
          "cantidad": 10
        },
        {
          "dinero": {
            "id": 15,
            "valor": 0.10,
            "imagen": "components/dinero/imagenes/moneda_10.jpg",
            "esMoneda": true,
            "imagen": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRAUz8nBeKe0LvACjldSwGZUUbBOAX-v020Zk78ujMXlfvjnAbS"
          },
          "cantidad": 10
        }
    ]);

  }

})();
