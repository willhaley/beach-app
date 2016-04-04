(function() {
  'use strict';

  angular
    .module('tides')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($http) {

    var main = this;
    var dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    main.tides = _.chunk(tides.extremes, 5);
    main.weather = _.chunk(weather.daily.data, 7);
    console.log( main.weather );
  }
})();
