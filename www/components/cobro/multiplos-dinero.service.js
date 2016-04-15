(function() {

  angular.module('brisas.logica').service('MultiplosDinero', MultiplosDinero);

  function MultiplosDinero($http, orderByFilter) {

    var vm = this;

    vm.calcularMultiplos = calcularMultiplos;

    function calcularMultiplos(dinero) {
      var dineroOrdenado = orderByFilter(dinero,'valor', true);
      var secuencias = [[]];
      for (var i = 0; i < dineroOrdenado.length; i++) {
        var vueltoSeguro = true;
        for (var j = 0; j < i; j++) {
          if (((dineroOrdenado[j].valor*100) % (dineroOrdenado[i].valor*100)) !== 0) {
            vueltoSeguro = false;
          }
        }
        for (var j = i+1; j < dineroOrdenado.length; j++) {
          if (((dineroOrdenado[i].valor*100) % (dineroOrdenado[j].valor*100)) !== 0) {
            vueltoSeguro = false;
          }
        }
        if (vueltoSeguro) {
          dineroOrdenado[i].multiploVuelto = 1;
          if (secuencias[secuencias.length-1].length!==0) {
            secuencias.push([]);
          }
        } else {
          secuencias[secuencias.length-1].push(dinero[i]);
        }
      }
      console.log(secuencias);
      secuencias.forEach(function(secuencia) {
        var multiplo = 1;
        secuencia.forEach(function(dinero) {
          multiplo = (lcm_two_numbers(multiplo,dinero.valor*100));
        });
        secuencia.forEach(function(dinero) {
          dinero.multiploVuelto = multiplo / (dinero.valor * 100);
        });
      });
      console.log(dineroOrdenado);
    }

    function lcm_two_numbers(x, y) {
       if ((typeof x !== 'number') || (typeof y !== 'number'))
        return false;
      return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
    }

    function gcd_two_numbers(x, y) {
      x = Math.abs(x);
      y = Math.abs(y);
      while(y) {
        var t = y;
        y = x % y;
        x = t;
      }
      return x;
    }

  }

})();
