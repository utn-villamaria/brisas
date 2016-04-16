(function() {

    angular.module('brisas').config(config);

    function config($stateProvider) {
        $stateProvider.state('actualizar-precio-producto',{
            url: '/actualizar-precio-producto',
            controller: 'ActualizarProductoCtrl as vm',
            templateUrl: 'app/actualizar-precio-producto/actualizar-precio-producto.html'
        });
    }

})();
