(function() {
    'use strict';

    angular
        .module('tides')
        .service('tidal', Tidal);


    /** @ngInject */
    function Tidal($http) {

        var url = 'https://www.worldtides.info/api?extremes&lat=34.3588100&lon=-77.6366444&key=6f535570-09f1-4aac-88bd-48d5dbb3e124';

    }
})();
