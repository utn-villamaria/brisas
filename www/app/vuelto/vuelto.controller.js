angular.module('brisas.pantallas')
.controller('VueltoCtrl',VueltoCtrl);

function VueltoCtrl($scope, $state,$ionicActionSheet, $timeout,CobroActual) {

  var vm=this;

  vm.vuelto = CobroActual.get().vuelto;
  console.log(vm.vuelto);

  vm.finDeVenta=function(){
    $state.go('estado de venta cambiar cuando se integre');
  };
  $scope.actualizarCaja=function(){
    alert("redireccionar a pantalla de inicio de caja, donde se le solicita contraseña, una vez cargada la caja regresar");
    $state.go('estado de inicio de caja cambiar cuando se integre');
  };
}
