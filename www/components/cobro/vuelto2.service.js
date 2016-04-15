(function(){
  angular.module('brisas.logica').service('Vuelto2', Vuelto2);

  function Vuelto2(orderByFilter) {
    var vm = this;
    vm.profundidad_maxima = 30;
    vm.optimizar = true;
    vm.calcular = calcular;

    function calcular(vuelto, dinero_disponible, profundidad_maxima) {
      vm.solucion = null;
      vm.vuelto = vuelto*100;
      vm.dinero = orderByFilter(dinero_disponible, 'dinero.valor', true);
      vm.profundidad_maxima = profundidad_maxima?profundidad_maxima:15;
      calcularVuelto(0, vm.vuelto, vm.dinero[0].cantidad, [], 0);
      return vm.solucion;
    }

    function calcularVuelto(indiceDinero, vueltoRestante, cantidadRestante, dineroAsignado, profundidad) {
      if (vm.solucion || profundidad > vm.profundidad_maxima) return;
      var maximoVuelto = 0;
      var opciones = [];
      for(var i = vm.dinero.length -1; i > indiceDinero; i--) {
        maximoVuelto = validarMaximoVuelto(i,maximoVuelto,vueltoRestante,vm.dinero[i].cantidad,opciones);
      }
      validarMaximoVuelto(indiceDinero,maximoVuelto,vueltoRestante,cantidadRestante,opciones);
      opciones.forEach(function(i) {
        if (i === indiceDinero) {
          var cantidadBilletes;
          if (vm.optimizar && vm.dinero[indiceDinero].dinero.multiploVuelto <= cantidadRestante) {
            var valorMultiplo = vm.dinero[indiceDinero].dinero.valor * 100 * vm.dinero[indiceDinero].dinero.multiploVuelto;
            cantidadBilletes = (Math.floor(vueltoRestante / valorMultiplo) * vm.dinero[indiceDinero].dinero.multiploVuelto);
            if (!cantidadBilletes) cantidadBilletes = 1;
          } else {
            cantidadBilletes = 1;
          }
          var nuevoVuelto = vueltoRestante - vm.dinero[indiceDinero].dinero.valor * 100 * cantidadBilletes;
          var nuevaCantidad = cantidadRestante - cantidadBilletes;
          var nuevoDinero = angular.copy(dineroAsignado);
          for (var j = 0; j < cantidadBilletes; j++) {
              nuevoDinero.push(vm.dinero[indiceDinero].dinero);
          }
          if (nuevoVuelto === 0) {
            vm.solucion = nuevoDinero;
            return;
          } else if (nuevoVuelto > 0) {
            calcularVuelto(i,nuevoVuelto,nuevaCantidad,nuevoDinero,profundidad+1);
          }
        } else {
          calcularVuelto(i,vueltoRestante,vm.dinero[i].cantidad,angular.copy(dineroAsignado),profundidad+1);
        }
      });
    }

    function validarMaximoVuelto(indice,maximoVuelto,vueltoRestante,cantidad,opciones) {
      maximoVuelto += vm.dinero[indice].dinero.valor * 100 * cantidad;
      if (maximoVuelto >= vueltoRestante) {
        opciones.unshift(indice);
      }
      return maximoVuelto;
    }

  }
})();
