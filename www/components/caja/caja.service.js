(function() {

  angular.module('brisas.logica').service('Caja', Caja);

  function Caja($localStorage) {

    var vm = this;

    vm.getCajaActual = getCajaActual;
    vm.setCantidad = setCantidad;
    vm.getCantidad = getCantidad;
    vm.abrirCaja = abrirCaja;
    vm.cerrarCaja = cerrarCaja;
    vm.cajaAbierta = cajaAbierta;
    vm.actualizarCajaActual = actualizarCajaActual;

    if (!$localStorage.cajas) {
      $localStorage.cajas = [];
    }

    function getCajas() {
        return $localStorage.cajas;
    }

    function getCajaActual() {
      return $localStorage.cajas.length ? $localStorage.cajas[$localStorage.cajas.length-1] : null;
    }

    function setCantidad(idDinero, cantidad) {
      getCajaActual().dinero.forEach(function(dinero) {
        if (dinero.dinero.id === idDinero) {
          dinero.cantidad = cantidad;
        }
      });
    }

    function getCantidad(idDinero) {
      var cantidad;
      getCajaActual().dinero.forEach(function(dinero) {
        if (dinero.dinero.id === idDinero) {
          cantidad = dinero.cantidad;
        }
      });
      return cantidad;
    }

    function abrirCaja(dinero) {
      if (cajaAbierta()) {
        cerrarCaja();
      }
      var caja = {
        fechaApertura: new Date(),
        fechaCierre: null,
        flujo: []
      };
      actualizarCaja(caja,dinero);
      $localStorage.cajas.push(caja);
    }

    function actualizarCajaActual(dinero) {
      actualizarCaja(getCajaActual(),dinero);
    }

    function actualizarCaja(caja, dinero) {
      caja.dinero = dinero;
      if (caja.dinero) {
        caja.dinero.forEach(function(dineroEspecifico) {
          var nuevaCantidad = parseInt(dineroEspecifico.cantidad);
          if (isNaN(nuevaCantidad)) {
            dineroEspecifico.cantidad = 0;
          } else {
            dineroEspecifico.cantidad = nuevaCantidad;
          }
        });
      }
    }

    function cajaAbierta() {
      var caja = getCajaActual();
      return caja ? (caja.fechaCierre ? false : true) : false;
    }

    function cerrarCaja() {
      if (cajaAbierta()) {
        getCajaActual().fechaCierre = new Date();
      }
    }

  }

})();
