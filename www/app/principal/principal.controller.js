(function() {

  function PrincipalCtrl($state) {

    var vm = this;

    vm.cobrar = cobrar;

    vm.abrirCaja = abrirCaja;

    function cobrar() {
      $state.go('seleccionar-productos');
    }

    function abrirCaja() {
      //$state.go('seleccionar-productos');
    }

  }

  angular.module('brisas.logica').controller('PrincipalCtrl', PrincipalCtrl);

})();
