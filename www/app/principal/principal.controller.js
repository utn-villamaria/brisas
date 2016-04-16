(function() {

  function PrincipalCtrl($state) {

    var vm = this;

    vm.modificarCaja = modificarCaja;

    vm.vender = vender;

    vm.modificarPrecioProducto = modificarPrecioProducto;

    function vender() {
      $state.go('seleccionar-productos');
    }

    function modificarCaja() {
      $state.go('modificarCaja');
    }

    function modificarPrecioProducto() {
      $state.go('actualizar-precio-producto');
    }
  }

  angular.module('brisas.logica').controller('PrincipalCtrl', PrincipalCtrl);

})();
