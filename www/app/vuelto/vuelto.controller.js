angular.module('brisas.pantallas', ['ionic'])
.controller('VueltoController',function($scope, $state,$ionicActionSheet, $timeout,VueltoService) {
  var vm=this;
  $scope.vuelto= VueltoService.getVueltoActual();
  //funcion candidata a ejecutar antes de entrar al estado
  $scope.alcanzaVuelto=function(){
    if($scope.vuelto.length===0){
      alert("no hay plata para vuelto");
    //hacer algo en la pantalla para indicar que no hay plata
    }
  };
  $scope.alcanzaVuelto();
  $scope.finDeVenta=function(){
    alert("Termino venta volver a pantalla de venta nuevamente");
    $state.go('estado de venta cambiar cuando se integre');
  };
  $scope.actualizarCaja=function(){
    alert("redireccionar a pantalla de inicio de caja, donde se le solicita contraseña, una vez cargada la caja regresar");
    $state.go('estado de inicio de caja cambiar cuando se integre');
  };
});
