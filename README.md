# colordistance
Change color temperature of a led strip based on the distance measured by a sonar.
Go to the [project home page](https://www.hackster.io/dynamick/colordistance-c4411a) on hackster to discover the details.

## Requirements

The project need [pi-blaster](https://github.com/sarfata/pi-blaster) daemon to be running. This guarantees us to send perfect PWM signals to our mosfets.

## Installation

Install all the dependencies
```sh
npm install
```
and build the code
```sh
npm run build
```

Now you could launch the main script by typing:
```sh
sudo node lib/index.js
```
sudo is needed to send gpio commands.

# Results
Watch che [video](https://www.youtube.com/watch?v=hAXX9rs4a0s)
![Wirings](https://hackster.imgix.net/uploads/attachments/258323/20170205_232018_uLJDtJYLdN.jpg?auto=compress%2Cformat&w=900&h=675&fit=min)
