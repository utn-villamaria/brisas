(function() {

    angular.module('brisas').config(config);

    function config($stateProvider) {
        $stateProvider.state('cierre-caja',{
            url: '/cierre-caja',
            controller: 'CierreCajaCtrl as vm',
            templateUrl: 'app/cierre-caja/cierre-caja.html',
            cache: false,
            resolve: {
              caja: function(Caja) {
                if (Caja.cajaAbierta()) {
                  return true;
                } else {
                  throw 'NCAerror';
                }
              }
            }
        });
    }

})();
