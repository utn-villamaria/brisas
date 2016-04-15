(function() {

    angular.module('brisas').config(config);

    function config($stateProvider) {
        $stateProvider.state('inicioCajaBillete',{
            url: '/inicio-caja-billete',
            controller: 'InicioCajaBilleteCtrl as vm',
            templateUrl: 'app/inicio-caja/inicio-caja-billete.html',
            resolve: {
              caja: function(Caja) {
                if (!Caja.cajaAbierta()) {
                  return true;
                } else {
                  throw 'NCCerror';
                }
              }
            }
        });
    }

})();
