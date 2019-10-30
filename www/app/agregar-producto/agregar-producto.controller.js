(function () {
  angular.module('brisas.pantallas').controller('AgregarProductoCtrl', function ($state, $scope, $ionicPopup, $ionicHistory) {
    var vm = this;
    vm.imagen = document.getElementById("file-image");

    vm.agregarProducto = function () {
      console.log("aa");
      console.log(vm.imagen.files[0]);
    }



  });
})();
