(function() {

    angular.module('brisas').config(config);

    function config($stateProvider) {
        $stateProvider.state('agregar-producto',{
            url: '/agregar-producto',
            controller: 'AgregarProductoCtrl as vm',
            templateUrl: 'app/agregar-producto/agregar-producto.html',
            cache: false,
            resolve: {
              
            }
        });
    }

})();
