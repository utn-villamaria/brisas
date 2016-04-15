(function() {

  angular.module('brisas.logica').service('CobroActual', CobroActual);

  function CobroActual(Cobro) {

    var vm = this;

    vm.get = get;

    vm.set = set;

    vm.calcularVuelto = calcularVuelto;

    var cobroActual = null;

    function get(nuevo) {
      return cobroActual;
    }

    function set() {
      cobroActual = nuevo;
    }

    function calcularVuelto(dineroRecibido) {
      cobroActual.dineroRecibido = dineroRecibido;
      cobroActual.vuelto = Cobro.obtenerVuelto(cobroActual.monto,cobroActual.dineroRecibido);
    }

    cobroActual = {
      monto: 55.8
    };

  }

})();
