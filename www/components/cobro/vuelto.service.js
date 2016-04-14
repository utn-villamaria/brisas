(function(){
  angular.module('brisas.logica').service('Vuelto', Vuelto);

  function Vuelto(orderByFilter) {
    var vm = this;
    vm.profundidad_maxima = 15;
    vm.calcular = calcular;

    function calcular(vuelto, dinero_disponible, profundidad_maxima) {
      vm.vuelto = vuelto;
      vm.dinero = orderByFilter(dinero_disponible, 'dinero.valor', true);
      vm.ramas = [];
      vm.soluciones = [];
      vm.profundidad_maxima = profundidad_maxima?profundidad_maxima:15;
      calcularVuelto(0, vuelto, vm.dinero[0].dinero.valor, vm.dinero[0].cantidad, 0, 0);
      return orderByFilter(vm.soluciones, 'length');
    }

    function calcularVuelto(indice, vuelto, valor_dinero, cantidad_dinero, profundidad, rama) {
      var valor;
      var cantidad;
      if(vm.dinero.length > indice + 1){
        valor = vm.dinero[indice + 1].dinero.valor;
        cantidad = vm.dinero[indice + 1].cantidad;
        vm.ramas.push([]);
        nueva_rama = vm.ramas.length - 1;
        console.log(nueva_rama);
        console.log(vm.ramas[nueva_rama]);
        console.log(vm.ramas[rama]);
        console.log(nueva_rama);
        vm.ramas[nueva_rama].concat(vm.ramas[rama]);
        console.log(nueva_rama);
        console.log(vm.ramas[nueva_rama]);
        console.log("----------------------------------------------");
        calcularVuelto(indice + 1, vuelto, valor, cantidad, profundidad+1, nueva_rama);
      }
      if(profundidad <= vm.profundidad_maxima) {
        valor = valor_dinero;
        cantidad = cantidad_dinero;
        if(cantidad > 0 && vuelto >= valor) {
          vuelto -= valor;
          vm.ramas[rama].push(vm.dinero[indice].dinero);
          if(vuelto === 0){
            vm.soluciones.push(vm.ramas[rama]);
          } else {
            calcularVuelto(indice, vuelto, valor, cantidad-1, profundidad+1, rama);
          }
        } else {
          if(vm.dinero.length > indice+1) {
            valor = vm.dinero[indice+1].dinero.valor;
            cantidad = vm.dinero[indice + 1].cantidad;
            calcularVuelto(indice + 1, vuelto, valor, cantidad, profundidad+1, rama);
          }
        }
      }
    }

  }
})();
