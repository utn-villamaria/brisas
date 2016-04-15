(function() {

    function ModificarCajaCtrl(Caja, $state, orderByFilter) {

        var vm = this;
        vm.cajaInicial = orderByFilter(Caja.getCajaActual().dinero, 'dinero.valor', true);

        vm.setDineroCaja = function(){
            Caja.getCajaActual().dinero = vm.cajaInicial;
            $state.go('principal');
        };


    }

    angular.module('brisas.logica').controller('ModificarCajaCtrl', ModificarCajaCtrl);

})();
