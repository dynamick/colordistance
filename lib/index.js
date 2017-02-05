'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _strip = require('./strip');

var _strip2 = _interopRequireDefault(_strip);

var _sonar = require('./sonar');

var _sonar2 = _interopRequireDefault(_sonar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function () {
  function Main() {
    _classCallCheck(this, Main);

    this.strip = new _strip2.default();
    this.sonar = new _sonar2.default();
    this.off_distance = 1000;
    this.max_distance = 100;
  }

  _createClass(Main, [{
    key: 'init',
    value: function init() {
      this.initialization = this.sonar.initSensor();
    }
  }, {
    key: 'process',
    value: function process() {
      var self = this;
      setTimeout(function () {
        var distance = self.sonar.getDistance();
        console.log(distance);

        if (distance < self.off_distance) {
          //distance = self.max_distance;

          distance = distance - 50;
          if (distance < 0) {
            distance = 0;
          }

          var normalized_distance = distance / self.max_distance;
          if (normalized_distance > 1) {
            normalized_distance = 1;
          }

          var red = parseInt(255 - normalized_distance * 255);
          var green = parseInt(0);
          var blue = parseInt(normalized_distance * 255);

          self.strip.setColor({ red: red, green: green, blue: blue });
          self.strip.apply();
        } else {
          //self.strip.setColor( {red: 0, green: 0, blue: 0 } );
          //self.strip.apply();
        }

        self.process();
      }, 100);
    }
  }, {
    key: 'run',
    value: function run() {
      var self = this;
      this.initialization.then(function () {
        //setTimeout( self.process(), 1000 );
        self.process();
      }, function (error) {
        console.log(error);
      });
    }
  }]);

  return Main;
}();

// main


var script = new Main();
script.init();
script.run();