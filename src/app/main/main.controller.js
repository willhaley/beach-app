(function() {
  'use strict';

  angular
    .module('tides')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $window) {

    var main = this;

    function get_data(){
      main.tides = _.chunk(tides.extremes, 5);
      main.weather = _.chunk(weather.daily.data, 7);
      main.current = weather.currently;
    }

    get_data();

    $timeout ( function(){
      $window.location.reload();
    }, 600000);


  }
})();
