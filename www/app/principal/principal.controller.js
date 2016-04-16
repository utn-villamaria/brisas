(function() {

  function PrincipalCtrl($scope, $state, TransicionEstadoProtegido) {

    var vm = this;

    vm.modificarCaja = modificarCaja;

    vm.vender = vender;

    vm.modificarPrecioProducto = modificarPrecioProducto;

    function vender() {
      $state.go('seleccionar-productos');
    }

    function modificarCaja() {
      TransicionEstadoProtegido.crearDialogoContrasenia($scope,'modificarCaja');
    }

    function modificarPrecioProducto() {
      TransicionEstadoProtegido.crearDialogoContrasenia($scope,'actualizar-precio-producto');
    }
  }

  angular.module('brisas.logica').controller('PrincipalCtrl', PrincipalCtrl);

})();
