(function() {

  angular.module('brisas.logica').service('Productos', Productos);

  function Productos($http, $timeout) {

    var vm = this;

    vm.getProductos = getProductos;

    function getProductos() {
        return $http.get('components/productos/productos.json');
    }

    function guardarProducto(producto) {
      return $timeout(function() {
        return null;
      });
    }

  }

})();
