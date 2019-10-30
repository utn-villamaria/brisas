

(function () {
  angular.module('brisas.pantallas').controller('AgregarProductoCtrl', function (Productos, $localStorage, $state, $scope, $ionicPopup, $ionicHistory) {
    var vm = this;
    vm.producto = {
      "id": "",
      "nombre": "",
      "precio": "",
      "metodoVenta": "",
      "imagen": ""
    };
    vm.imagen = document.getElementById("file-image");
    vm.base64Image;
    vm.vendePorKg = false;

    vm.agregarNuevoProducto = function () {
      vm.producto.imagen = vm.base64Image;
      vm.producto.precio=Number(vm.producto.precio);
      if (vm.vendePorKg) {
        vm.producto.metodoVenta = "P"
      } else { vm.producto.metodoVenta = "U" }
      Productos.getProductos().then(function (data) {
        var productos = $localStorage.productos;
        var id = 1;
        if (productos.length && productos.length > 0) {
          console.log(productos[1]);
          ultimoId = productos.length - 1;
          id = productos[ultimoId].id + 1;
        }
        vm.producto.id = id;
        $localStorage.productos.push(vm.producto);
        console.log($localStorage.productos);
      });

    }

    document.getElementById("file-image").onchange = function (e) {
      // Creamos el objeto de la clase FileReader
      let reader = new FileReader();
      // Leemos el archivo subido y se lo pasamos a nuestro fileReader
      reader.readAsDataURL(e.target.files[0]);
      // Le decimos que cuando este listo ejecute el código interno
      reader.onload = function () {
        let preview = document.getElementById('preview'),
          image = document.createElement('img');
        vm.base64Image = reader.result;

        image.src = reader.result;
        preview.innerHTML = '';
        preview.append(image);
      };
    }

    vm.irAPrincipal = function () {
      $state.go('principal');
    }   


  });
})();
