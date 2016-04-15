angular.module('brisas.pantallas', ['ionic']).controller('RecepcionController', function($scope) {

  var vm = this;
  vm.finDeRecepcion = function() {
    alert("Termino recepcion");
  };

  vm.agregarBillete = function(moneda) {
    vm.seleccionados.push(moneda);
  };

  vm.seleccionados = [];

  vm.billetes = [{
    imagen: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRAUz8nBeKe0LvACjldSwGZUUbBOAX-v020Zk78ujMXlfvjnAbS'
  }, {
    imagen: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRAUz8nBeKe0LvACjldSwGZUUbBOAX-v020Zk78ujMXlfvjnAbS'
  }, {
    imagen: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRAUz8nBeKe0LvACjldSwGZUUbBOAX-v020Zk78ujMXlfvjnAbS'
  }, {
    imagen: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRAUz8nBeKe0LvACjldSwGZUUbBOAX-v020Zk78ujMXlfvjnAbS'
  }, {
    imagen: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRAUz8nBeKe0LvACjldSwGZUUbBOAX-v020Zk78ujMXlfvjnAbS'
  }, {
    imagen: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRAUz8nBeKe0LvACjldSwGZUUbBOAX-v020Zk78ujMXlfvjnAbS'
  }, {
    imagen: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRAUz8nBeKe0LvACjldSwGZUUbBOAX-v020Zk78ujMXlfvjnAbS'
  }, {
    imagen: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRAUz8nBeKe0LvACjldSwGZUUbBOAX-v020Zk78ujMXlfvjnAbS'
  }, {
    imagen: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRAUz8nBeKe0LvACjldSwGZUUbBOAX-v020Zk78ujMXlfvjnAbS'
  }, {
    imagen: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRAUz8nBeKe0LvACjldSwGZUUbBOAX-v020Zk78ujMXlfvjnAbS'
  }, {
    imagen: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRAUz8nBeKe0LvACjldSwGZUUbBOAX-v020Zk78ujMXlfvjnAbS'
  }];

});
