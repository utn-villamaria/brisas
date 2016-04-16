(function() {

  angular.module('brisas.logica').service('Productos', Productos);

  function Productos($http, $localStorage, $q) {

    var vm = this;

    vm.getProductos = getProductos;
    vm.actualizarProductos = actualizarProductos;
    if(!$localStorage.productos) $localStorage.productos = [];

    function getProductos() {
      var deferer = $q.defer();
      if($localStorage.productos.length === 0) {
        $http.get('components/productos/productos.json').then(function(response) {
          $localStorage.productos = response.data;
          deferer.resolve(response.data);
        }, function(error) {
          deferer.reject(error);
        });
      } else {
        deferer.resolve($localStorage.productos);
      }
      return deferer.promise;
    }

    function actualizarProductos(productos) {
      $localStorage.productos = productos;
    }

  }

})();
