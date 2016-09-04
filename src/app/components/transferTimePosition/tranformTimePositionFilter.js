/**
 * @ngdoc service
 * @name tides:degtoCardFilter
 *
 * @description
 *
 *
 * */
angular.module('tides')
    .filter('tranformTimePositionFilter', function($filter){
        return function(time) {
            var string = $filter('date')(time, 'h:mm');
            return ( string.length === 5 ) ? '5 20' : '20 20';
        };
});

