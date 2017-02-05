var piblaster  = require('pi-blaster.js');

class Strip {
  constructor() {
    this.pin_red   = 22;
    this.pin_green = 27;
    this.pin_blue  = 17;
    this.pin_rele  = 20;
    this.color  = { red: 0, green: 0, blue: 0};
    console.log('REMEMBER: to activate pi-blaster daemon.')
  }

  powerOn() {
    //var Gpio = require('pigpio').Gpio;
    //var rele = new Gpio(this.pin_rele, {mode: Gpio.OUTPUT});
    //rele.digitalWrite(0);
  }

  setColor(color) {
    this.color = color;
    console.log(color);
  }

  apply() {
    piblaster.setPwm(this.pin_red,   (this.color.red  / 255) ); // red
    piblaster.setPwm(this.pin_green, (this.color.green/ 256) ); // green
    piblaster.setPwm(this.pin_blue,  (this.color.blue / 256) ); // blue
  }
}

export default Strip