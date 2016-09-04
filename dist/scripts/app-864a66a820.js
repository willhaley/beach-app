function WeatherIcons(){return function(){}}!function(){"use strict";angular.module("tides",["ngAnimate","ngSanitize","ui.router","ngMaterial","nvd3"])}(),function(){"use strict";function t(){function t(){return e}var e=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Angular Material Design",url:"https://material.angularjs.org/#/",description:"The Angular reference implementation of the Google's Material Design specification.",logo:"angular-material.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}];this.getTec=t}angular.module("tides").service("webDevTec",t)}(),angular.module("tides").factory("weatherIcons",WeatherIcons),function(){"use strict";function t(t){}t.$inject=["$http"],angular.module("tides").service("tidal",t)}(),function(){"use strict";function t(t){}t.$inject=["$http"],angular.module("tides").service("tempature",t)}(),describe("Filter: iEat2.percentageFilter",function(){beforeEach(module("iEat2"));var t;beforeEach(inject(function(e){t=e("percentageFilter")})),it("should be injected and defined",function(){expect(t("filterInput")).toBe("filterInput")})}),angular.module("tides").filter("percentageFilter",["$filter",function(t){return function(e){var r=t("number")(100*e,0);return 10>r?"0"+r:0==r?"00":r}}]),function(){"use strict";function t(){function t(t){var e=this;e.relativeDate=t(e.creationDate).fromNow()}t.$inject=["moment"];var e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return e}angular.module("tides").directive("acmeNavbar",t)}(),function(){"use strict";function t(t){function e(e,r,i,n){var l,a=t(r[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});r.addClass("acme-malarkey"),angular.forEach(e.extraValues,function(t){a.type(t).pause()["delete"]()}),l=e.$watch("vm.contributors",function(){angular.forEach(n.contributors,function(t){a.type(t.login).pause()["delete"]()})}),e.$on("$destroy",function(){l()})}function r(t,e){function r(){return i().then(function(){t.info("Activated Contributors View")})}function i(){return e.getContributors(10).then(function(t){return n.contributors=t,n.contributors})}var n=this;n.contributors=[],r()}r.$inject=["$log","githubContributor"];var i={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:e,controller:r,controllerAs:"vm"};return i}t.$inject=["malarkey"],angular.module("tides").directive("acmeMalarkey",t)}(),function(){"use strict";function t(t,e){function r(r){function n(t){return t.data}function l(e){t.error("XHR Failed for getContributors.\n"+angular.toJson(e.data,!0))}return r||(r=30),e.get(i+"/contributors?per_page="+r).then(n)["catch"](l)}var i="https://api.github.com/repos/Swiip/generator-gulp-angular",n={apiHost:i,getContributors:r};return n}t.$inject=["$log","$http"],angular.module("tides").factory("githubContributor",t)}(),angular.module("tides").filter("degtoCardFilter",function(){return function(t){return t>11.25&&33.75>t?"NNE":t>33.75&&56.25>t?"ENE":t>56.25&&78.75>t?"E":t>78.75&&101.25>t?"ESE":t>101.25&&123.75>t?"ESE":t>123.75&&146.25>t?"SE":t>146.25&&168.75>t?"SSE":t>168.75&&191.25>t?"S":t>191.25&&213.75>t?"SSW":t>213.75&&236.25>t?"SW":t>236.25&&258.75>t?"WSW":t>258.75&&281.25>t?"W":t>281.25&&303.75>t?"WNW":t>303.75&&326.25>t?"NW":t>326.25&&348.75>t?"NNW":"N"}}),function(){"use strict";function t(t){var e=this;e.tides=_.chunk(tides.extremes,5),e.weather=_.chunk(weather.daily.data,7),e.current=weather.currently,console.info("weather",e.current)}t.$inject=["$http"],angular.module("tides").controller("MainController",t)}(),function(){"use strict";function t(t){t.debug("runBlock end")}t.$inject=["$log"],angular.module("tides").run(t)}(),function(){"use strict";function t(t,e){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),e.otherwise("/")}t.$inject=["$stateProvider","$urlRouterProvider"],angular.module("tides").config(t)}(),function(){"use strict";angular.module("tides").constant("malarkey",malarkey).constant("toastr",toastr).constant("moment",moment)}(),function(){"use strict";function t(t,e){t.debugEnabled(!0),e.options.timeOut=3e3,e.options.positionClass="toast-top-right",e.options.preventDuplicates=!0,e.options.progressBar=!0}t.$inject=["$logProvider","toastr"],angular.module("tides").config(t)}(),angular.module("tides").run(["$templateCache",function(t){t.put("app/main/main.html",'<md-content layout="" layout-align="center start" layout-fill="" xmlns="http://www.w3.org/1999/html"><div flex="" layout=""><div flex="" ng-repeat="tide in main.tides[0]"><span ng-if="tide.height < -.7"><svg id="lowest" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" viewbox="0 0 250 250" width="100%" height="215px"><g id="layer1" transform="translate(0 -802.36)"><g id="g4198-1" transform="matrix(1.225 0 0 1.225 -4.9309 790.8)"><ellipse id="path3336-8" style="image-rendering:auto" fill-rule="evenodd" rx="98.594" ry="97.718" stroke="#2B88B2" cy="109.87" cx="107.05" stroke-width="2.8116" fill="#2B88B2"></ellipse><path id="path4155-7" d="m103.67 9.4448c65.065 9.4464 130.61 63.311 86.281 149.8 0 0-11.655 18.177-23.559 15.327-15.531-3.0168-13.883-4.8352-45.459 7.9959-22.197 10.59-56.124-13.05-99.022-24.15-37.076-68.08 11.819-146.55 81.762-148.98" fill-rule="evenodd" stroke="#fff" stroke-width="1.4278px" fill="#fff"></path><ellipse id="path3336-5-7" style="image-rendering:auto" rx="98.594" ry="97.718" stroke="#2B88B2" cy="109.87" cx="107.05" stroke-width="2.8116" fill="none"></ellipse></g></g><g transform="translate(20 0)"><text xml:space="preserve" text-anchor="start" font-family="\'Trebuchet MS\', Gadget, sans-serif" font-size="40" id="svg_2" y="110" x="35" fill-opacity="null" stroke-opacity="null" stroke-width="0" stroke="null" fill="#000000">{{tide.date | date:\'h:mm a\'}}</text></g><g transform="translate(15 35)"><text xml:space="preserve" text-anchor="start" font-family="\'Trebuchet MS\', Gadget, sans-serif" font-size="20" id="svg_2" y="200" x="85" fill-opacity="null" stroke-opacity="null" stroke-width="0" stroke="null" fill="#000000">{{tide.height | number:2}}</text></g></svg></span> <span ng-if="tide.height >= -.7 && tide.height < -.3"><svg id="lower" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" viewbox="0 0 250 250" width="100%" height="215px"><g id="layer1" transform="translate(0 -802.36)"><g id="g4193-0" transform="matrix(1.2007 0 0 1.2007 -282.96 788.94)"><ellipse id="path3336-9-4" style="image-rendering:auto" fill-rule="evenodd" rx="98.594" ry="97.718" stroke="#2B88B2" cy="114.73" cx="339.55" stroke-width="2.8116" fill="#2B88B2"></ellipse><path id="path4155-1-3" d="m336.53 14.142c36.076 2.0178 114.78 35.735 103.32 106.36-5.8734 8.3031-3.2179 64.048-51.767 46.585-24.296-7.2384-50.398-14.874-70.703-9.2557-23.089 6.4049-46.169 18.054-60.224 14.092-65.63-105.7 49.49-157.58 79.37-157.77" fill-rule="evenodd" stroke="#fff" stroke-width=".57434px" fill="#fff"></path><ellipse id="path3336-5-9-2" style="image-rendering:auto" rx="98.594" ry="97.718" stroke="#2B88B2" cy="114.73" cx="339.55" stroke-width="2.8116" fill="none"></ellipse></g></g><g transform="translate(20 0)"><text xml:space="preserve" text-anchor="start" font-family="\'Trebuchet MS\', Gadget, sans-serif" font-size="40" id="svg_2" y="110" x="35" fill-opacity="null" stroke-opacity="null" stroke-width="0" stroke="null" fill="#000000">{{tide.date | date:\'h:mm a\'}}</text></g><g transform="translate(15 35)"><text xml:space="preserve" text-anchor="start" font-family="\'Trebuchet MS\', Gadget, sans-serif" font-size="20" id="svg_2" y="200" x="85" fill-opacity="null" stroke-opacity="null" stroke-width="0" stroke="null" fill="#000000">{{tide.height | number:2}}</text></g></svg></span> <span ng-if="tide.height >= -.3 && tide.height < .0"><svg id="low" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" viewbox="0 0 250 250" width="100%" height="215px"><g id="layer1" transform="translate(0 -802.36)"><g id="g4193-6-3" transform="matrix(1.2002 0 0 1.2002 -283.13 789.52)"><ellipse id="path3336-9-5-3" style="image-rendering:auto" fill-rule="evenodd" rx="98.594" ry="97.718" stroke="#2B88B2" cy="114.73" cx="339.55" stroke-width="2.8116" fill="#2B88B2"></ellipse><path id="path4155-1-8-2" d="m336.53 14.142c36.076 2.0178 115.35 18.645 98 130.13-5.8734 8.3031-19.727-11.981-57.765-10.545-32.668 9.8069-30.465 17.471-50.77 23.089-23.089 6.4049-67.022-8.4239-81.077-12.386-27.466-91.11 61.723-130.09 91.612-130.28" fill-rule="evenodd" stroke="#fff" stroke-width=".57434px" fill="#fff"></path><ellipse id="path3336-5-9-7-3" style="image-rendering:auto" rx="98.594" ry="97.718" stroke="#2B88B2" cy="114.73" cx="339.55" stroke-width="2.8116" fill="none"></ellipse></g></g><g transform="translate(20 0)"><text xml:space="preserve" text-anchor="start" font-family="\'Trebuchet MS\', Gadget, sans-serif" font-size="40" id="svg_2" y="110" x="35" fill-opacity="null" stroke-opacity="null" stroke-width="0" stroke="null" fill="#000000">{{tide.date | date:\'h:mm a\'}}</text></g><g transform="translate(15 35)"><text xml:space="preserve" text-anchor="start" font-family="\'Trebuchet MS\', Gadget, sans-serif" font-size="20" id="svg_2" y="200" x="85" fill-opacity="null" stroke-opacity="null" stroke-width="0" stroke="null" fill="#000000">{{tide.height | number:2}}</text></g></svg></span> <span ng-if="tide.height >= 0 && tide.height < .3"><svg id="high" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" viewbox="0 0 250 250" width="100%" height="215px"><g id="layer1" transform="translate(0 -802.36)"><g id="g4193-6" transform="matrix(1.1444 0 0 1.2304 -263.11 787.48)"><ellipse id="path3336-9-5" style="image-rendering:auto" fill-rule="evenodd" rx="98.594" ry="97.718" stroke="#2B88B2" cy="114.73" cx="339.55" stroke-width="2.8116" fill="#2B88B2"></ellipse><path id="path4155-1-8" d="m336.53 14.142c36.076 2.0178 93.361 21.048 101.18 84.793-5.8734 8.3031-34.042-15.162-72.08-13.726-14.102-1.5567-67.844 11.904-88.149 17.522-23.089 6.4049-20.654 3.5817-34.709-0.38055 8.8787-66.721 63.868-88.016 93.757-88.209" fill-rule="evenodd" stroke="#fff" stroke-width=".57434px" fill="#fff"></path><ellipse id="path3336-5-9-7" style="image-rendering:auto" rx="98.594" ry="97.718" stroke="#2B88B2" cy="114.73" cx="339.55" stroke-width="2.8116" fill="none"></ellipse></g></g><g transform="translate(20 0)"><text xml:space="preserve" text-anchor="start" font-family="\'Trebuchet MS\', Gadget, sans-serif" font-size="40" id="svg_2" y="110" x="35" fill-opacity="null" stroke-opacity="null" stroke-width="0" stroke="null" fill="#000000">{{tide.date | date:\'h:mm a\'}}</text></g><g transform="translate(15 35)"><text xml:space="preserve" text-anchor="start" font-family="\'Trebuchet MS\', Gadget, sans-serif" font-size="20" id="svg_2" y="200" x="85" fill-opacity="null" stroke-opacity="null" stroke-width="0" stroke="null" fill="#000000">{{tide.height | number:2}}</text></g><text xml:space="preserve" text-anchor="start" font-family="\'Trebuchet MS\', Gadget, sans-serif" font-size="40" id="svg_2" y="110" x="35" fill-opacity="null" stroke-opacity="null" stroke-width="0" stroke="null" fill="#000000">{{tide.date | date:\'h:mm a\'}}</text><text xml:space="preserve" text-anchor="start" font-family="\'Trebuchet MS\', Gadget, sans-serif" font-size="20" id="svg_2" y="200" x="85" fill-opacity="null" stroke-opacity="null" stroke-width="0" stroke="null" fill="#000000">{{tide.height | number:2}}</text></svg></span> <span ng-if="tide.height >= .3 && tide.height < .7"><svg id="higher" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" viewbox="0 0 250 250" width="100%" height="215px"><g id="layer1" transform="translate(0 -802.36)"><g id="g4193" transform="matrix(1.1998 0 0 1.2051 -282.73 791.18)"><ellipse id="path3336-9" style="image-rendering:auto" fill-rule="evenodd" rx="98.594" ry="97.718" stroke="#2B88B2" cy="114.73" cx="339.55" stroke-width="2.8116" fill="#2B88B2"></ellipse><path id="path4155-1" d="m336.53 14.142c36.076 2.0178 75.011 21.42 93.776 58.643-5.8734 8.3031-40.769-16.088-78.807-14.652-14.102-1.5567-44.036 7.3947-64.341 13.013-23.089 6.4049-23.901 6.9202-37.956 2.958 15.238-25.653 57.44-59.769 87.329-59.962" fill-rule="evenodd" stroke="#fff" stroke-width=".57434px" fill="#fff"></path><ellipse id="path3336-5-9" style="image-rendering:auto" rx="98.594" ry="97.718" stroke="#2B88B2" cy="114.73" cx="339.55" stroke-width="2.8116" fill="none"></ellipse></g></g><g transform="translate(20 0)"><text xml:space="preserve" text-anchor="start" font-family="\'Trebuchet MS\', Gadget, sans-serif" font-size="40" id="svg_2" y="110" x="35" fill-opacity="null" stroke-opacity="null" stroke-width="0" stroke="null" fill="#000000">{{tide.date | date:\'h:mm a\'}}</text></g><g transform="translate(15 35)"><text xml:space="preserve" text-anchor="start" font-family="\'Trebuchet MS\', Gadget, sans-serif" font-size="20" id="svg_2" y="200" x="85" fill-opacity="null" stroke-opacity="null" stroke-width="0" stroke="null" fill="#000000">{{tide.height | number:2}}</text></g></svg></span> <span ng-if="tide.height >= .7"><svg id="highest" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" viewbox="0 0 250 250" width="100%" height="215px"><g id="layer1" transform="translate(0 -802.36)"><g id="g4198" transform="matrix(1.2252 0 0 1.225 -5.5629 794.81)"><ellipse id="path3336" style="image-rendering:auto" fill-rule="evenodd" rx="98.594" ry="97.718" stroke="#2B88B2" cy="109.87" cx="107.05" stroke-width="2.8116" fill="#2B88B2"></ellipse><path id="path4155" d="m104.04 9.2854c36.076 2.0178 52.697 15.126 71.175 27.175-5.8734 8.3031-19.027 5.3675-45.336 0.2237-14.11-1.557-22.76-6.889-48.325-0.433-23.089 6.405-27.082 5.33-41.137 1.367 19.557-13.007 33.73-28.14 63.622-28.333" fill-rule="evenodd" stroke="#fff" stroke-width=".57434px" fill="#fff"></path><ellipse id="path3336-5" style="image-rendering:auto" rx="98.594" ry="97.718" stroke="#2B88B2" cy="109.87" cx="107.05" stroke-width="2.8116" fill="none"></ellipse></g></g><g transform="translate(20 0)"><text xml:space="preserve" text-anchor="start" font-family="\'Trebuchet MS\', Gadget, sans-serif" font-size="40" id="svg_2" y="110" x="35" fill-opacity="null" stroke-opacity="null" stroke-width="0" stroke="null" fill="#000000">{{tide.date | date:\'h:mm a\'}}</text></g><g transform="translate(15 35)"><text xml:space="preserve" text-anchor="start" font-family="\'Trebuchet MS\', Gadget, sans-serif" font-size="20" id="svg_2" y="200" x="85" fill-opacity="null" stroke-opacity="null" stroke-width="0" stroke="null" fill="#000000">{{tide.height | number:2}}</text></g></svg></span></div></div></md-content><md-content layout="" layout-align="center center" layout-fill="" layout-padding="" class="gridListdemoBasicUsage"><div flex=""><md-grid-list md-cols="7" md-row-height="1:1" md-gutter="6px"><md-grid-tile class="yellow" layout="row" md-rowspan="3" ng-repeat="item in main.weather[0]"><div class="weather-icon"><i class="wi wi-forecast-io-{{item.icon}}"></i></div><div class="weather-details" layout="" layout-align="center center"><div flex="">{{item.temperatureMin|number:0}}&deg; | {{item.temperatureMax|number:0}}&deg;<br><i class="wi wi-humidity"></i> {{item.humidity | percentageFilter}}%<br><i class="wi wi-rain"></i> {{item.precipProbability | percentageFilter}}%<br>{{item.windSpeed | number:1}} <span>{{item.windBearing| degtoCardFilter}}</span></div></div><md-grid-tile-footer><h3>{{( item.time * 1000 ) | date:\'EEEE\'}}</h3></md-grid-tile-footer></md-grid-tile></md-grid-list></div></md-content><md-content layout="" layout-align="start center" layout-fill="" layout-padding="" class="current-heading"><h1>Today at {{ ( 1000 * main.current.time )| date:\'shortTime\'}}</h1></md-content><md-content layout="" layout-align="center center" layout-fill="" class="current-status"><div flex="" layout="" layout-align="center center"><h1 class="status"><i class="wi wi-forecast-io-{{main.current.icon}}"></i></h1></div><div flex="" layout="" layout-align="center center"><h1><i class="wi wi-thermometer"></i> {{main.current.temperature}}&deg;</h1></div><div flex="" layout="" layout-align="center center"><h1><i class="wi wi-humidity"></i> {{main.current.humidity | percentageFilter}}%<br></h1></div><div flex="" layout="" layout-align="center center"><h1><i class="wi wi-rain"></i> {{main.current.precipProbability| percentageFilter}}%</h1></div><div flex="" layout="" layout-align="center center"><h1>{{main.current.visibility}}</h1></div><div flex="" layout="" layout-align="center center"><h1>{{main.current.windSpeed | number:1}}<span>{{main.current.windBearing| degtoCardFilter}}</span></h1></div></md-content>'),t.put("app/components/navbar/navbar.html",'<md-toolbar layout="row" layout-align="center center"><md-button href="https://github.com/Swiip/generator-gulp-angular">Gulp Angular</md-button><section flex="" layout="row" layout-align="left center"><md-button href="#" class="md-raised">Home</md-button><md-button href="#" class="md-raised">About</md-button><md-button href="#" class="md-raised">Contact</md-button></section><md-button class="acme-navbar-text">Application was created {{ vm.relativeDate }}.</md-button></md-toolbar>')}]);