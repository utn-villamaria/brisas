(function() {

  angular.module('brisas.logica').service('Dinero', Dinero);

  function Dinero($http) {

    function getDinero() {
        return $http.get('components/dinero/dinero.json');
    }

  }

})();
