/**
 * @ngdoc service
 * @name iEat2:percentageFilter
 *
 * @description
 *
 *
 * */
angular.module('tides')
    .filter('percentageFilter', function($filter){
        return function(input) {
            var number = $filter('number')( input * 100, 0 );

            if ( number < 10 ){
                return '0'+number;
            }
            if ( number == 0 ){
                return '00';
            }
            return number;
        };
});

