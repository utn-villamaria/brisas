(function() {
  angular.module('brisas.pantallas').controller('ActualizarProductoCtrl', function($state, Productos) {
    var vm = this;
    Productos.getProductos().then(function(data) {
      vm.productos = data;
      console.log(vm.productos);
    }, function(error){
      console.log(error);
    }
  );

    vm.actualizarProductos = function() {
      Productos.actualizarProductos(vm.productos);
      $state.go('principal');
    };

  });
})();
