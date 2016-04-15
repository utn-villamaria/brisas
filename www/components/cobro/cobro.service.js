(function() {

  angular.module('brisas.logica').service('Cobro', Cobro);

  function Cobro(orderByFilter, filterFilter, Caja, Vuelto) {

    var vm = this;

    vm.obtenerVuelto = obtenerVuelto;
    vm.aplicarVuelto = aplicarVuelto;

    function aplicarVuelto(vuelto, dineroRecibido, productos, caja) {
      if (!caja) caja = Caja.getCajaActual();
      if (!vuelto) return;
      dineroRecibido.forEach(function(dinero) {
        var presente = false;
        caja.dinero.forEach(function(dineroCaja){
          if(dineroCaja.dinero.id === dinero.id) {
            dineroCaja.cantidad += 1;
            presente = true;
          }
        });
        if(!presente) {
          caja.dinero.push({
            cantidad: 1,
            dinero: dinero
          });
        }
      });
      vuelto.forEach(function(dinero) {
        caja.dinero.forEach(function(dineroCaja){
          if(dineroCaja.dinero.id === dinero.id) {
            dineroCaja.cantidad -= 1;
          }
        });
      });
      caja.flujo.push(
        {
          fechaHora: new Date(),
          vuelto: vuelto,
          dineroRecibido: dineroRecibido
        }
      );
      if (!caja.ventas) caja.ventas = [];
      caja.ventas.push({
        productos: productos
      })
    }

    function obtenerVuelto(montoACobrar,dineroRecibido,caja) {
      var otraCaja = angular.copy(caja ? caja.dinero : Caja.getCajaActual().dinero);
      var dinero = agruparDinero(dineroRecibido);
      var dineroDisponible = sumarDineroRecibido(otraCaja, dinero);
      var recibido = montoRecibido(dinero);
      var vuelto = (recibido * 100 - montoACobrar * 100) / 100;
      var dineroFiltrado = filterFilter(dineroDisponible,function(valor) {
        return valor.cantidad > 0;
      });
      var resultado = Vuelto.calcular(vuelto, dineroFiltrado);
      return resultado;
    }

    function montoRecibido(dinero_disponible) {
      var cantidad = 0.0;
      dinero_disponible.forEach(function(dinero) {
        cantidad += dinero.dinero.valor * dinero.cantidad;
      });
      return cantidad;
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

    function sumarDineroRecibido(caja, dineroRecibido) {
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

  }

})();
