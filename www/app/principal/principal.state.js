(function() {

  angular.module('brisas.pantallas').config(config);

  function config($stateProvider) {
    $stateProvider.state('principal',{
      url: '/',
      controller: 'PrincipalCtrl as vm',
      templateUrl: 'app/principal/principal.html'
    });
  }

})();
