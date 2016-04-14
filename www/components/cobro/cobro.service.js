(function() {

  angular.module('brisas.logica').service('Cobro', Cobro);

  function Cobro(orderByFilter, Caja, Vuelto) {

    var vm = this;

    vm.obtenerVuelto = obtenerVuelto;

    function obtenerVuelto(montoACobrar,dineroRecibido,caja) {
      var otraCaja = angular.copy(caja ? caja.dinero : Caja.getCajaActual().dinero);
      var dinero = agruparDinero(dineroRecibido);
      var dineroDisponible = sumarDineroRecibido(otraCaja,dinero);
      var dineroOrdenado = ordenarDinero(dineroDisponible);
      var resultado = Vuelto.dynamic(5,[1,2,3]);
      console.log(resultado);
    }

    function agruparDinero(dineroRecibidos) {
      var dineroAgrupado = [];
      dineroRecibidos.forEach(function(dinero) {
        var presente = false;
        dineroAgrupado.forEach(function(otroDinero) {
          if (otroDinero.dinero.id === dinero.id) {
            otroDinero.cantidad++;
            presente = true;
          }
        });
        if (!presente) {
          dineroAgrupado.push({
            dinero: dinero,
            cantidad: 1
          });
        }
      });
      return dineroAgrupado;
    }

    function sumarDineroRecibido(caja,dineroRecibido) {
      dineroRecibido.forEach(function(dinero) {
        var presente = false;
        caja.forEach(function(otroDinero) {
          if (otroDinero.dinero.id === dinero.dinero.id) {
            otroDinero.cantidad+=dinero.cantidad;
            presente = true;
          }
        });
        if (!presente) {
          caja.push(dinero);
        }
      });
      return caja;
    }

    function ordenarDinero(dineroDisponible) {
      return orderByFilter(dineroDisponible,'dinero.valor',true);
    }

    function calcularVuelto(dineroDisponible, vuelto) {
    //   var vueltoRestante = vuelto;
    //   var dineroDisponibleCopy = angular.copy(dineroDisponible);
    //   var contar = 1;
    //   while( vueltoRestante > 0 && dineroDisponible.length > 0) {
    //     var vueltoRestante = vuelto;
    //     dineroDisponibleCopy.forEach(function(dinero) {
    //       var continuar = true;
    //       while(continuar){
    //         if(dinero.cantidad > 0 && dinero.dinero.valor < vueltoRestante) {
    //           dinero.cantidad--;
    //           vueltoRestante -= dinero.dinero.valor;
    //         } else {
    //           continuar = false;
    //         }
    //       }
    //     });
    //     dineroDisponibleCopy = dineroDisponible.splice(contar, 1);
    //     contar++;
    //   }
    // }
    // if(vueltoRestante > 0) {
    //   console.log("No se puede entregar vuelto");
    }
  }

})();
