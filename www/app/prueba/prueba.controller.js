(function() {

  function PruebaCtrl(Cobro,Caja) {

    var vm = this;

    vm.montoCobrar = 2.0;

    vm.dineroRecibido = [
      {
        "id": 5,
        "valor": 20.0,
        "imagen": "components/dinero/imagenes/belgrano_nuevo.jpg",
        "esMoneda": false
      },
      // {
      //   "id": 7,
      //   "valor": 10.0,
      //   "imagen": "components/dinero/imagenes/belgrano_nuevo.jpg",
      //   "esMoneda": false
      // },
      // {
      //   "id": 7,
      //   "valor": 10.0,
      //   "imagen": "components/dinero/imagenes/belgrano_nuevo.jpg",
      //   "esMoneda": false
      // }
    ];

    Caja.abrirCaja({
      "fechaApertura": new Date(),
      "fechaCierre": null,
      "dinero": [
        {
          "dinero": {
            "id": 10,
            "valor": 2.0,
            "imagen": "components/dinero/imagenes/mitre.jpg",
            "esMoneda": false
          },
          "cantidad": 4
        },
        {
          "dinero": {
            "id": 9,
            "valor": 5.0,
            "imagen": "components/dinero/imagenes/san_martin_nuevo.jpg",
            "esMoneda": false
          },
          "cantidad": 15
        },
        {
          "dinero": {
            "id": 7,
            "valor": 10.0,
            "imagen": "components/dinero/imagenes/belgrano_nuevo.jpg",
            "esMoneda": false
          },
          "cantidad": 1
        }
      ]
    });

    vm.caja = Caja.getCajaActual();

    vm.vuelto = Cobro.obtenerVuelto(vm.montoCobrar,vm.dineroRecibido,vm.caja);
    Cobro.aplicarVuelto(vm.vuelto, vm.caja);

  }

  angular.module('brisas.logica').controller('PruebaCtrl', PruebaCtrl);

})();
