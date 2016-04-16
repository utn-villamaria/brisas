(function() {

  angular.module('brisas.logica').directive('focusMe', focusMe);

  function focusMe($timeout) {
    return {
      link: function(scope, element, attrs) {
        $timeout(function() {
          element[0].focus();
        },1000);
      }
    };
  }

})();
