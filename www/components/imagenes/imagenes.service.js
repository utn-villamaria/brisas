(function() {

  angular.module('brisas.logica').service('Imagenes', Imagenes);

  function Imagenes($cordovaCamera, $cordovaFile) {

    var vm = this;

    vm.sacarFoto = sacarFoto;

    function sacarFoto() {
      vm.options = {
        destinationType: Camera.DestinationType.NATIVE_URI,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      };
      $cordovaCamera.getPicture(vm.options).then(function(imageURI) {
        window.FilePath.resolveNativePath(imageURI,function(path){
          console.log(path);
          var name = path.substr(path.lastIndexOf('/') + 1);
          var namePath = path.substr(0, path.lastIndexOf('/') + 1);
          $cordovaFile.copyFile(namePath, name, cordova.file.dataDirectory, 'hola')
            .then(function(info) {
              console.log(info);
            }, function(e) {
              console.log('No anduvo');
              console.log(e);
            });
        },function(error) {
          console.log(error);
        });
      }, function(err) {
        console.log(err);
      });
    }

  }

})();
