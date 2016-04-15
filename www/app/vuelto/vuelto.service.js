angular.module('brisas.pantallas', ['ionic'])
  .service('VueltoService', function () {
    var vm = this;
    vm.vueltoActual=[];

    vm.setVueltoActual=function(vuelto){
      vm.vueltoActual=vuelto;
    };
    vm.getVueltoActual=function(){
      return vm.vueltoActual;
    };
  });
