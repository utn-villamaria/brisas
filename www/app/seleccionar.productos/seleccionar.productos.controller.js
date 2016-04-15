angular.module('brisas.pantallas', ['ionic']).controller('SeleccionarProductosCtrl', function() {

  var vm = this;

  vm.agregarProducto = function(producto){
    alert(producto);
    alert('ir al estado donde se ingresa la cantidad/precio');
  };

  vm.productos = [{
    imagen : 'http://misimagenesde.com/wp-content/uploads/2013/07/imagenes-de-pasteles-2.jpg'
  },{
    imagen : 'http://misimagenesde.com/wp-content/uploads/2013/07/imagenes-de-pasteles-2.jpg'
  },{
    imagen : 'http://misimagenesde.com/wp-content/uploads/2013/07/imagenes-de-pasteles-2.jpg'
  },{
    imagen : 'http://misimagenesde.com/wp-content/uploads/2013/07/imagenes-de-pasteles-2.jpg'
  },{
    imagen : 'http://misimagenesde.com/wp-content/uploads/2013/07/imagenes-de-pasteles-2.jpg'
  },{
    imagen : 'http://misimagenesde.com/wp-content/uploads/2013/07/imagenes-de-pasteles-2.jpg'
  },{
    imagen : 'http://misimagenesde.com/wp-content/uploads/2013/07/imagenes-de-pasteles-2.jpg'
  },{
    imagen : 'http://misimagenesde.com/wp-content/uploads/2013/07/imagenes-de-pasteles-2.jpg'
  },{
    imagen : 'http://misimagenesde.com/wp-content/uploads/2013/07/imagenes-de-pasteles-2.jpg'
  }];

  vm.finDeSeleccion = function(){
      alert('Volver al estado anterior');
  };

});
