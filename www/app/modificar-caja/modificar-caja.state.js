(function() {

    angular.module('brisas').config(config);

    function config($stateProvider) {
        $stateProvider.state('modificarCaja',{
            url: '/modificar-caja',
            controller: 'ModificarCajaCtrl as vm',
            cache: false,
            templateUrl: 'app/modificar-caja/modificar-caja.html'
        });
    }

})();
