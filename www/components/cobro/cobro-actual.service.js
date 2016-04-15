(function() {

  angular.module('brisas.logica').service('CobroActual', CobroActual);

  function CobroActual() {

    var vm = this;

    vm.get = get;

    vm.set = set;

    var cobroActual = null;

    function get(nuevo) {
      cobroActual = nuevo;
    }

    function set() {
      return cobroActual;
    }

  }

})();
