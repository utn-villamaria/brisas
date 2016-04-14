(function(){
  angular.module('brisas.logica').service('VueltoTest', VueltoTest);

  function VueltoTest(Vuelto2) {

    var vm = this;

    vm.probar = probar;

    var pruebas = [
      {
        vuelto: 18,
        dineroDisponible: [
          {
            dinero: {
              valor: 10
            },
            cantidad: 1
          },
          {
            dinero: {
              valor: 5
            },
            cantidad: 1
          },
          {
            dinero: {
              valor: 2
            },
            cantidad: 8
          }
        ]
      },
      {
        vuelto: 8,
        dineroDisponible: [
          {
            dinero: {
              valor: 10
            },
            cantidad: 1
          },
          {
            dinero: {
              valor: 5
            },
            cantidad: 1
          },
          {
            dinero: {
              valor: 2
            },
            cantidad: 8
          }
        ]
      },
      {
        vuelto: 60,
        dineroDisponible: [
          {
            dinero: {
              valor: 20
            },
            cantidad: 10
          },
          {
            dinero: {
              valor: 50
            },
            cantidad: 3
          },
          {
            dinero: {
              valor: 5
            },
            cantidad: 3
          }
        ]
      },
      {
        vuelto: 55.8,
        dineroDisponible: [
          {
            dinero: {
              valor: 50
            },
            cantidad: 10
          },
          {
            dinero: {
              valor: 5
            },
            cantidad: 3
          },
          {
            dinero: {
              valor: 2
            },
            cantidad: 3
          },
          {
            dinero: {
              valor: 0.25
            },
            cantidad: 3
          },
          {
            dinero: {
              valor: 0.10
            },
            cantidad: 10
          }
        ]
      }
    ]

    function probar() {
      pruebas.forEach(function(prueba) {
        console.log(prueba.vuelto);
        console.log(prueba.dineroDisponible);
        var resultado = Vuelto2.calcular(prueba.vuelto,prueba.dineroDisponible,30);
        console.log(resultado);
      })
    }

  }

})();
