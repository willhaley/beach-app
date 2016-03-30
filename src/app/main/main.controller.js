(function() {
  'use strict';

  angular
    .module('tides')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($http) {

    var main = this;
    main.data = sinAndCos(tides);

    var dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    main.options = {
      chart: {
        type: 'multiBarChart',
        height: 450,
        margin : { top: 20, right: 20, bottom: 40, left: 55 },
        x: function(d){ return d.x; },
        y: function(d){ return d.y; }
      }
    };

    function sinAndCos(tides) {

      var sin = [];

      _.forEach(tides.extremes, function(measurements){

        var hour = new Date(measurements.date).getHours();
        var minute = new Date(measurements.date).getMinutes();

        var ampm = 'AM';

        if ( hour > 12 ){
          hour = hour - 12;
          ampm = 'PM';
        }

        if ( hour == 0 ){
          hour = 12;
        }

        if ( minute < 10 && minute > 0 ){
          minute = '0'+ minute;
        }

        if ( ! minute ){
          minute = '00';
        }



        console.log(  );

        sin.push( {
          x: hour + ':' + minute + '' + ampm,
          y: measurements.height } );

      });

      //Line chart data should be sent as an array of series objects.
      return [
        {
          values: sin,
          key: 'Tides',
          color: '#7777ff',
          area: true      //area - set to true if you want this line to turn into a filled area chart.
        }
      ];
    };
  }
})();
