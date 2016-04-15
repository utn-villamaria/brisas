(function() {

  function PrincipalCtrl($state) {

    var vm = this;

    vm.modificarCaja = modificarCaja;

    vm.vender = vender;

    function vender() {
      $state.go('seleccionar-productos');
    }

    function modificarCaja() {
      $state.go('modificarCaja');
    }
  }

  angular.module('brisas.logica').controller('PrincipalCtrl', PrincipalCtrl);

})();
