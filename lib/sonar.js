'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var usonic = require('mmm-usonic');

var Sonar = function () {
  function Sonar() {
    _classCallCheck(this, Sonar);

    this.echoPin = 24;
    this.triggerPin = 23;
    this.timeout = 750;
  }

  _createClass(Sonar, [{
    key: 'getDistance',
    value: function getDistance() {
      return this.sensor();
    }
  }, {
    key: 'initSensor',
    value: function initSensor(error) {
      var self = this;
      var promise = new Promise(function (resolve, reject) {
        usonic.init(function (error) {
          if (error) {
            console.log(error);
            reject(error);
          } else {
            self.sensor = usonic.createSensor(self.echoPin, self.triggerPin, self.timeout);
            resolve();
          }
        });
      });
      return promise;
    }
  }]);

  return Sonar;
}(); // end of class Sonar

exports.default = Sonar;