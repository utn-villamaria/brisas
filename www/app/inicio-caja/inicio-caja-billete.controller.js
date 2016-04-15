(function() {

    function InicioCajaBilleteCtrl(Caja, Dinero, $state) {

        var vm = this;
        vm.cajaInicial=[];
        Dinero.getDinero().then(function(respuesta){
            vm.dinero=respuesta.data;
            console.log(vm.dinero);

            vm.dinero.sort(function(a, b){return a.valor-b.valor});

            vm.dinero.forEach(function(e){
                var objeto ={
                    dinero:e,
                    cantidad:0
                };
                vm.cajaInicial.push(objeto);
            });
        });

        vm.abrirCajaInicial=function(){
            console.log(vm.cajaInicial);
            Caja.abrirCaja(vm.cajaInicial);
            console.log(Caja.getCajaActual());
            $state.go('/principal');
        };


    }

    angular.module('brisas.logica').controller('InicioCajaBilleteCtrl', InicioCajaBilleteCtrl);

})();
