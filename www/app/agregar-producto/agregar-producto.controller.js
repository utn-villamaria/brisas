

(function () {
  angular.module('brisas.pantallas').controller('AgregarProductoCtrl', function (Productos, $localStorage, $state, $scope, $ionicPopup, $ionicHistory) {
    var vm = this;
    vm.modo = "nuevo";
    vm.productoEditar;
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
    Productos.getProductos().then(function (data) {
      vm.productos = data;
    });

    vm.agregarNuevoProducto = function () {
      vm.producto.imagen = vm.base64Image;
      vm.producto.precio = parseFloat(vm.producto.precio);
      if (vm.vendePorKg) {
        vm.producto.metodoVenta = "P"
      } else { vm.producto.metodoVenta = "U" }
      Productos.getProductos().then(function (data) {
        var productos = $localStorage.productos;
        if (vm.modo == "nuevo") {
          var id = 1;
          if (productos.length && productos.length > 0) {
            console.log(productos[1]);
            ultimoId = productos.length - 1;
            id = productos[ultimoId].id + 1;
          }
          vm.producto.id = id;
        }
        //var copy = Object.assign({}, vm.producto);
        var copy = {
          "id": vm.producto.id,
          "nombre": vm.producto.nombre,
          "precio": vm.producto.precio,
          "metodoVenta": vm.producto.metodoVenta,
          "imagen": vm.producto.imagen
        };
        vm.guardarProducto(copy);
        vm.mostrarDialogo(vm.modo, copy);
        vm.limpiar();
      });

    }

    document.getElementById("file-image").onchange = function (e) {
      // Creamos el objeto de la clase FileReader
      var reader = new FileReader();
      // Leemos el archivo subido y se lo pasamos a nuestro fileReader
      reader.readAsDataURL(e.target.files[0]);
      // Le decimos que cuando este listo ejecute el código interno
      reader.onload = function () {
        var preview = document.getElementById('preview');
        image = document.createElement('img');
        vm.base64Image = reader.result;
        image.src = reader.result;
        preview.innerHTML = '';
        image.style = " width:200px; height: 200px;"
        preview.appendChild(image);
      };
    }

    vm.irAPrincipal = function () {
      $state.go('principal');
    }

    vm.mostrarDialogo = function (modo, producto) {
      if (modo == "eliminar") {
        var dialogo = $ionicPopup.show({
          template: 'Desea eliminar el producto ' + producto.nombre + "?",
          title: 'Eliminar Producto',
          subTitle: '',
          scope: $scope,
          buttons: [{
            text: 'SI',
            type: 'button-balanced ion-checkmark-round',
            onTap: function (e) {
              vm.eliminar(producto);
              return true;
            }
          }, {
            text: 'NO',
            type: ' button-assertive ion-close-round',
            onTap: function (e) {
              return false;
            }
          }]
        });
        return;
      }
      $ionicPopup.show({
        template: 'El producto se ha creado correctamente',
        title: '<b>Atención.</b>',
        subTitle: '',
        scope: $scope,
        buttons: [{
          text: '',
          type: 'boton-grande button-balanced ion-checkmark-round',
          onTap: function (e) {
            return true;
          }
        }
        ]
      });
    }

    vm.limpiar = function () {
      vm.producto.precio = "";
      vm.producto.id = "";
      vm.producto.nombre = "";
      vm.producto.imagen = "";
      vm.producto.metodoVenta = "";
      vm.imagen.value = "";
      vm.vendePorKg = false;
      var preview = document.getElementById('preview');
      preview.innerHTML = '';
      vm.modo = "nuevo";
    }

    vm.stringPrecio = function (p) {
      if (p.metodoVenta == "U") {
        return "$" + p.precio + "/unidad.";
      }
      return "$" + p.precio + "/Kg.";
    }

    vm.eliminar = function (p) {
      var index = vm.productos.indexOf(p);
      if (index > -1) {
        vm.productos.splice(index, 1);
      }
    }

    vm.cargarParaEditar = function (p) {
      vm.limpiar();
      vm.producto = {
        "id": p.id,
        "nombre": p.nombre,
        "precio": p.precio,
        "metodoVenta": p.metodoVenta,
        "imagen": p.imagen
      };
      vm.vendePorKg = vm.producto.metodoVenta == "P";
      vm.base64Image = vm.producto.imagen;
      var preview = document.getElementById('preview');
      image = document.createElement('img');
      image.src = vm.producto.imagen
      preview.innerHTML = '';
      image.style = " width:200px; height: 200px;"
      vm.modo = "editar";
      preview.appendChild(image);
      //preview.append(image);

    }

    vm.nombreBotonAgregar = function () {
      if (vm.modo == "editar") {
        return "Editar";
      }
      return "Agregar";
    }

    vm.guardarProducto = function (p) {
      if (vm.modo == "editar") {
        for (var index = 0; index < vm.productos.length; index++) {
          var element = vm.productos[index];
          if (element.id == p.id) {
            element.precio = p.precio;
            element.nombre = p.nombre;
            element.metodoVenta = p.metodoVenta;
            element.imagen = p.imagen;
          }
        }
      }
      else {
        $localStorage.productos.push(p);
      }


    }

  });
})();
