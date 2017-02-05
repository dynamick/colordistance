var usonic = require('mmm-usonic');

class Sonar {
  constructor() {
    this.echoPin    = 24;
    this.triggerPin = 23;
    this.timeout    = 750;
  }

  getDistance() {
    return this.sensor();
  }

  initSensor( error ) {
    var self = this;
    var promise = new Promise( function (resolve, reject) {
      usonic.init( function(error) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          self.sensor = usonic.createSensor(self.echoPin, self.triggerPin, self.timeout);
          resolve();
        }
      } );
    });
    return promise;
  }

} // end of class Sonar

export default Sonar
