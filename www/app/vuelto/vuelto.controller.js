(function(){

  angular.module('brisas.pantallas')
  .controller('VueltoCtrl',VueltoCtrl);

  function VueltoCtrl($state, $ionicHistory, CobroActual) {

    var vm=this;

    vm.vuelto = CobroActual.get().vuelto;

    vm.finDeVenta=function(){
      CobroActual.finVenta();
      $ionicHistory.nextViewOptions({
        historyRoot: true
      });
      $state.go('principal');
    };

  }

})();
