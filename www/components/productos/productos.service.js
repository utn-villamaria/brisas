(function() {

  angular.module('brisas.logica').service('Productos', Productos);

  function Productos($http, $localStorage, $q) {

    var vm = this;

    vm.getProductos = getProductos;
    vm.actualizarProductos = actualizarProductos;
    if(!$localStorage.productos) $localStorage.productos = [];

    function getProductos() {
      var deferer = $q.defer();
     $http.get('components/productos/productos.json').then(function(response) {
      //$http.get('https://raw.githubusercontent.com/utn-villamaria/brisas/beca-billetes-nuevos/www/components/productos/productos.json').then(function(response) {
        if($localStorage.versionProductos && $localStorage.versionProductos === response.data.version) {
        } else {
          if ($localStorage.productos.length === 0) {
            $localStorage.productos = response.data.productos;
          } else {
            response.data.productos.forEach(function(prod) {
              var existe = false;
              $localStorage.productos.forEach(function(localProd) {
                if(prod.id === localProd.id) {
                  existe = true;
                }
              });
              if(!existe) {
                $localStorage.productos.push(prod);
              }
            });
          }
        }
        $localStorage.versionProductos = response.data.version;
        deferer.resolve($localStorage.productos);
      }, function(error) {
        deferer.reject(error);
      });
      return deferer.promise;
    }

    function actualizarProductos(productos) {
      $localStorage.productos = productos;
    }

  }

})();
