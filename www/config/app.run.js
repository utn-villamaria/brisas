(function(){

  angular.module('brisas').run(run);

  function run($rootScope, $state, $ionicHistory) {

    $rootScope.$on('$stateChangeError', function(event, toState, toStateParams, fromState, fromStateParams, error) {
      $ionicHistory.nextViewOptions({
        historyRoot: true
      });
      if (error === 'NCAerror') {
        $state.go('inicioCajaBillete');
      } else if (error === 'NCCerror') {
        $state.go('principal');
      } else if (error === 'CoAerror') {
        $state.go('principal');
      }

    });

  }


})();
