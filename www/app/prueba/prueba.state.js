(function() {

  angular.module('brisas').config(config);

  function config($stateProvider) {
    $stateProvider.state('prueba',{
      url: '/prueba',
      controller: 'PruebaCtrl as vm',
      templateUrl: 'app/prueba/prueba.html'
    });
  }

})();
