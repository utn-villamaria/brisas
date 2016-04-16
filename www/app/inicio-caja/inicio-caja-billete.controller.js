(function() {

    function InicioCajaBilleteCtrl(Caja, Dinero, $state) {

        var vm = this;
        vm.cajaInicial=[];
        Dinero.getDinero().then(function(respuesta){
            vm.dinero=respuesta.data;

            vm.dinero.sort(function(a, b){return b.valor-a.valor;});

            vm.dinero.forEach(function(e){
                var objeto ={
                    dinero:e,
                    cantidad:0
                };
                vm.cajaInicial.push(objeto);
            });
        });

        vm.abrirCajaInicial=function(){
            Caja.abrirCaja(vm.cajaInicial);
            $state.go('principal');
        };
    }

    angular.module('brisas.logica').controller('InicioCajaBilleteCtrl', InicioCajaBilleteCtrl);

})();
