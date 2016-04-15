angular.module('brisas.pantallas').controller('SeleccionarProductosCtrl', function($scope, $ionicPopup) {

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
    vm.seleccionados.forEach(function(item){
      total = total + item.importe;
    });
    return total;
  };

  vm.popupImporte = function(producto) {
    $scope.info = {};

    var dialogo = $ionicPopup.show({
      template: '<input type="number" ng-model="info.cantidad">',
      title: 'Ingrese Importe',
      subTitle: '',
      scope: $scope,
      buttons: [{
        text: '<b>Aceptar</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (!$scope.info.cantidad) {
            //don't allow the user to close unless he enters wifi password
            e.preventDefault();
          } else {
            return $scope.info.cantidad;
          }
        }
      }, {
        text: 'Cancelar'
      }]
    });

    dialogo.then(function(precio) {
      vm.agregar(producto, precio);
    });
  }

  vm.productos = [{
    imagen: 'http://misimagenesde.com/wp-content/uploads/2013/07/imagenes-de-pasteles-2.jpg'
  }, {
    imagen: 'http://misimagenesde.com/wp-content/uploads/2013/07/imagenes-de-pasteles-2.jpg'
  }, {
    imagen: 'http://misimagenesde.com/wp-content/uploads/2013/07/imagenes-de-pasteles-2.jpg'
  }, {
    imagen: 'http://misimagenesde.com/wp-content/uploads/2013/07/imagenes-de-pasteles-2.jpg'
  }, {
    imagen: 'http://misimagenesde.com/wp-content/uploads/2013/07/imagenes-de-pasteles-2.jpg'
  }, {
    imagen: 'http://misimagenesde.com/wp-content/uploads/2013/07/imagenes-de-pasteles-2.jpg'
  }, {
    imagen: 'http://misimagenesde.com/wp-content/uploads/2013/07/imagenes-de-pasteles-2.jpg'
  }, {
    imagen: 'http://misimagenesde.com/wp-content/uploads/2013/07/imagenes-de-pasteles-2.jpg'
  }, {
    imagen: 'http://misimagenesde.com/wp-content/uploads/2013/07/imagenes-de-pasteles-2.jpg'
  }];

  vm.finDeSeleccion = function() {
    alert('Volver al estado anterior');
  };

});
