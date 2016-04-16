angular.module('brisas.pantallas').controller('SeleccionarProductosCtrl', function($scope, $state, $ionicPopup, Productos, CobroActual) {

  var vm = this;

  vm.seleccionados = [];

  vm.agregarProducto = function(producto) {
    if (producto.metodoVenta === 'U') {
      vm.agregar(producto, producto.precio);
    } else {
      vm.popupImporte(producto);
    }
  };

  vm.agregar = function(producto, importe) {
    vm.seleccionados.push({
      'producto': producto,
      'importe': importe
    });
  };

  vm.quitarSeleccionado = function(indice) {
    vm.seleccionados.splice(indice, 1);
  }

  vm.calcularTotal = function() {
    var total = 0;
    vm.seleccionados.forEach(function(item) {
      total = total + item.importe;
    });
    return Math.ceil(total * 2) / 2;
  };

  vm.popupImporte = function(producto) {
    $scope.info = {};
    var dialogo = $ionicPopup.show({
      template: '<input type="number" focus-me min="0" max="1000" ng-model="info.precio" style="height: 80px; font-size: 60px;">',
      title: '<b>Ingrese Importe</b>',
      subTitle: '',
      scope: $scope,
      buttons: [{
        text: '',
        type: 'boton-grande button-balanced ion-checkmark-round',
        onTap: function(e) {
          if (!$scope.info.precio || $scope.info.precio <= 0) {
            e.preventDefault();
          } else {
            return $scope.info.precio;
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

    dialogo.then(function(precio) {
      if (precio) {
        vm.agregar(producto, precio);
      }

    });
  }

  vm.popupConfirmarVenta = function() {
    if (vm.seleccionados.length > 0) {
      var dialogo = $ionicPopup.show({
        title: '<b>¿Confirma la venta?</b>',
        subTitle: '',
        scope: $scope,
        buttons: [{
          text: '',
          type: 'boton-grande button-balanced ion-checkmark-round',
          onTap: function(e) {
            return true;
          }
        }, {
          text: '',
          type: 'boton-grande button-assertive ion-close-round',
          onTap: function(e) {
            dialogo.close();
          }
        }]
      });

      dialogo.then(function(confirma) {
        if (confirma) {
          CobroActual.set({
            'monto': vm.calcularTotal(),
            'productos' : vm.seleccionados
          });
          $state.go('recepcion');
        }
      });
    }
  }

  Productos.getProductos().then(function(response) {
    vm.productos = response.data;
  });

});
