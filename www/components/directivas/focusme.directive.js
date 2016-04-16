(function() {

  angular.module('brisas.logica').directive('focusMe', focusMe);

  function focusMe($timeout) {
    return {
      link: function(scope, element, attrs) {
        $timeout(function() {
          cordova.plugins.Focus.focus(element);
        },1000);
      }
    };
  }

})();
