(function() {

  angular.module('brisas.logica').service('CobroActual', CobroActual);

  function CobroActual(Cobro) {

    var vm = this;

    vm.get = get;

    vm.set = set;

    vm.calcularVuelto = calcularVuelto;

    vm.finVenta = finVenta;

    var cobroActual = null;

    function get() {
      return cobroActual;
    }

    function set(nuevo) {
      cobroActual = nuevo;
    }

    function calcularVuelto(dineroRecibido) {
      cobroActual.dineroRecibido = dineroRecibido;
      cobroActual.vuelto = Cobro.obtenerVuelto(cobroActual.monto,cobroActual.dineroRecibido);
    }

    function finVenta() {
      Cobro.aplicarVuelto(cobroActual.vuelto,cobroActual.dineroRecibido,cobroActual.productos);
      cobroActual = null;
    }
  }

})();
