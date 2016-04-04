(function() {
  'use strict';

  angular
    .module('tides')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($http, tempature) {

    var main = this;

    main.timeFrame = ['Today', 'Tomorrow', 'Next'];

    var tideUrl = 'https://www.worldtides.info/api?extremes&lat=35.595438&lon=-77.585250&key=6f535570-09f1-4aac-88bd-48d5dbb3e124';

    var tideCall = $http.get(tideUrl);
        tideCall.then(function(data){
          main.data = sinAndCos(data.data);
        });

    main.tempature = tempature;
    main.tempature.daily.data = _.slice(tempature.daily.data, 0, 3);
    console.log(tempature);
/*
    var tempUrl = 'https://api.forecast.io/forecast/4b087fe12683c3b471c85c74499920d5/34.3588100,-77.6366444';

    var tempCall = $http.get(tempUrl);
        tempCall.then(function(data){
          main.temps = data;
          console.log( data );
        });
*/
   /* var tides = {
      "status":200,
      "requestLat":35.595436,
      "requestLon":-77.58525,
      "responseLat":35.399998,
      "responseLon":-76.600006,
      "atlas":"Global",
      "copyright":"Tidal Data retrieved from www.worldtides.info. Copyright (c) 2010-2015 Oregon State University. Licensed for individual spatial coordinates only via ModEM-Geophysics Inc. NO GUARANTEES ARE MADE ABOUT THE CORRECTNESS OF THIS TIDAL DATA. You may not use this data if anyone or anything could come to harm as a result of using it.",
      "extremes":[
        {"dt":1459026659,"date":"2016-03-26T21:10+0000","height":0.24186009457913143,"type":"High"},
        {"dt":1459048060,"date":"2016-03-27T03:07+0000","height":-0.23847547496104687,"type":"Low"},
        {"dt":1459070663,"date":"2016-03-27T09:24+0000","height":0.3101980074067232,"type":"High"},
        {"dt":1459094296,"date":"2016-03-27T15:58+0000","height":-0.2944300251189909,"type":"Low"},
        {"dt":1459116726,"date":"2016-03-27T22:12+0000","height":0.1934730396557363,"type":"High"},
        {"dt":1459137686,"date":"2016-03-28T04:01+0000","height":-0.19175890666837267,"type":"Low"},
        {"dt":1459160348,"date":"2016-03-28T10:19+0000","height":0.2846490378563123,"type":"High"},
        {"dt":1459184417,"date":"2016-03-28T17:00+0000","height":-0.27546926690824713,"type":"Low"}
      ]
    };*/

  //  main.data = sinAndCos(tides);

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
