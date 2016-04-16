(function() {

  angular.module('brisas.logica').service('TransicionEstadoProtegido', TransicionEstadoProtegido);

  function TransicionEstadoProtegido($state,$ionicPopup) {

    var vm = this;

    vm.crearDialogoContrasenia = crearDialogoContrasenia;

    var contrasenia = 'fbrisas';

    function crearDialogoContrasenia(scope, estado) {
      scope.info = {};
      var dialogo = $ionicPopup.show({
        template: '<input type="password" focus-me ng-model="info.contrasenia" style="height: 80px; font-size: 60px;">',
        title: '<b>Ingrese la contraseña de administrador para acceder a esta funcionalidad.</b>',
        subTitle: '',
        scope: scope,
        buttons: [{
          text: '',
          type: 'boton-grande button-balanced ion-checkmark-round',
          onTap: function(e) {
            if (!scope.info.contrasenia || scope.info.contrasenia !== contrasenia) {
              scope.info.contrasenia = '';
              e.preventDefault();
            } else {
              return true;
            }
          }
        }, {
          text: '',
          type: 'boton-grande button-assertive ion-close-round',
          onTap: function(e) {
            return false;
          }
        }]
      });

      dialogo.then(function(valor) {
        if (valor) {
          $state.go(estado);
        }
      });
    }

  }

})();
