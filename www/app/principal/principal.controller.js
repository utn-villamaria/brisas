(function() {

  function PrincipalCtrl($scope, $state, TransicionEstadoProtegido) {

    var vm = this;

    vm.modificarCaja = modificarCaja;

    vm.vender = vender;

    vm.modificarPrecioProducto = modificarPrecioProducto;

    vm.cerrarCaja = cerrarCaja;

    function vender() {
      $state.go('seleccionar-productos');
    }

    function modificarCaja() {
      TransicionEstadoProtegido.crearDialogoContrasenia($scope,'modificarCaja');
    }

    function modificarPrecioProducto() {
      TransicionEstadoProtegido.crearDialogoContrasenia($scope,'actualizar-precio-producto');
    }

    function cerrarCaja() {
      TransicionEstadoProtegido.crearDialogoContrasenia($scope,'cierre-caja');
    }

  }

  angular.module('brisas.logica').controller('PrincipalCtrl', PrincipalCtrl);

})();
