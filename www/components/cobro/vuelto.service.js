(function(){
  angular.module('brisas.logica').service('Vuelto', Vuelto);

  function Vuelto() {
    var vm = this;
    vm.dynamic = dynamic;

    function dynamic(amount, coins) {
      var coinReq = []; // this will store the optimal solution
											// for all the values -- from 0 to
											// given amount.
  		var CC = []; // resets for every smaller problems
  											// and minimum in it is the optimal
  											// solution for the smaller problem.
  		coinReq[0] = 0; // 0 coins are required to make the change for 0
  		// now solve for all the amounts
  		for (var amt = 1; amt <= amount; amt++) {
  			for (var j = 0; j < coins.length; j++) {
  				CC[j] = -1;
  			}
  			// Now try taking every coin one at a time and fill the solution in
  			// the CC[]
  			for (var j = 0; j < coins.length; j++) {
  				if (coins[j] <= amt) { // check if coin value is less than
  										// amount
  					CC[j] = coinReq[amt - coins[j]] + 1; // if available,
  																// select the
  																// coin and add
  																// 1 to solution
  																// of
  																// (amount-coin
  					// value)
  				}
  			}
  			//Now solutions for amt using all the coins is stored in CC[]
  //			take out the minimum (optimal) and store in coinReq[amt]
  			coinReq[amt]=-1;
  			for(var j=1;j<coins.length;j++){
  				if(CC[j]>0 && (coinReq[amt]==-1 || coinReq[amt]>CC[j])){
  					coinReq[amt]=CC[j];
  				}
  			}
  		}
  		//return the optimal solution for amount
  		return coinReq[amount];

    }
  }
})();
