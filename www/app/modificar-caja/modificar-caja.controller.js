(function() {

    function ModificarCajaCtrl(Caja, $state, orderByFilter) {

        var vm = this;
        vm.cajaInicial = orderByFilter(Caja.getCajaActual().dinero, 'dinero.valor', true);
        vm.calcularTotal = calcularTotal;

        function calcularTotal() {
          var total = 0.0;
          vm.cajaInicial.forEach(function(dinero) {
            total += dinero.cantidad * dinero.dinero.valor;
          });
          return total;
        }

        vm.setDineroCaja = function(){
            Caja.actualizarCajaActual(vm.cajaInicial);
            $state.go('principal');
        };


    }

    angular.module('brisas.logica').controller('ModificarCajaCtrl', ModificarCajaCtrl);

})();
