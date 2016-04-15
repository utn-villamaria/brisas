(function() {

  angular.module('brisas.logica').service('Dinero', Dinero);

  function Dinero($http, orderByFilter) {

    var vm = this;

    vm.getDinero = getDinero;

    function getDinero() {
        return $http.get('components/dinero/dinero.json');
    }

  }

})();
