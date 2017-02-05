import Strip from './strip';
import Sonar from './sonar';

class Main {
  constructor() {
    this.strip = new Strip();
    this.sonar = new Sonar();
    this.off_distance = 1000;
    this.max_distance = 100;
  }

  init() {
    this.initialization = this.sonar.initSensor();
  }

  process() {
    var self = this;
    setTimeout( function() {
      var distance = self.sonar.getDistance();
      console.log(distance);

      if (distance < self.off_distance) {
        //distance = self.max_distance;

        distance = distance - 50;
        if ( distance < 0 ) {
          distance = 0;
        }

        var normalized_distance = distance / self.max_distance;
        if ( normalized_distance > 1 ) {
          normalized_distance = 1;
        }

        var red   = parseInt( 255 - ( normalized_distance * 255 ) ) ;
        var green = parseInt( 0 );
        var blue  = parseInt ( normalized_distance * 255 );
      
        self.strip.setColor( {red: red, green: green, blue: blue } );
        self.strip.apply();

      } else {
        //self.strip.setColor( {red: 0, green: 0, blue: 0 } );
        //self.strip.apply();
      }

      self.process();
    }, 100);
  }

  run() {
    var self = this;
    this.initialization.then(function() {
      //setTimeout( self.process(), 1000 );
      self.process();
    }, function(error) {
      console.log(error);
    });
  }

}

// main
var script = new Main();
script.init();
script.run();
