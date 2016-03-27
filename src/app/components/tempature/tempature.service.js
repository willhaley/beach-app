(function() {
    'use strict';

    angular
        .module('tides')
        .service('tempature',Tempature);

    /** @ngInject */
    function Tempature($http) {
//-77.6366444
        var url = 'https://api.forecast.io/forecast/4b087fe12683c3b471c85c74499920d5/34.3588100,-77.6366444';

        /* var call = $http.get(url);
         call.then(function(data){
         console.log(data);
         });
         */

    }
})();
