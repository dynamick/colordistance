'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var piblaster = require('pi-blaster.js');

var Strip = function () {
  function Strip() {
    _classCallCheck(this, Strip);

    this.pin_red = 22;
    this.pin_green = 27;
    this.pin_blue = 17;
    this.pin_rele = 20;
    this.color = { red: 0, green: 0, blue: 0 };
    console.log('REMEMBER: to activate pi-blaster daemon.');
  }

  _createClass(Strip, [{
    key: 'powerOn',
    value: function powerOn() {
      //var Gpio = require('pigpio').Gpio;
      //var rele = new Gpio(this.pin_rele, {mode: Gpio.OUTPUT});
      //rele.digitalWrite(0);
    }
  }, {
    key: 'setColor',
    value: function setColor(color) {
      this.color = color;
      console.log(color);
    }
  }, {
    key: 'apply',
    value: function apply() {
      piblaster.setPwm(this.pin_red, this.color.red / 255); // red
      piblaster.setPwm(this.pin_green, this.color.green / 256); // green
      piblaster.setPwm(this.pin_blue, this.color.blue / 256); // blue
    }
  }]);

  return Strip;
}();

exports.default = Strip;