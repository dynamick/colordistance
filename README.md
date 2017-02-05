# colordistance
Change color temperature of a led strip based on the distance measured by a sonar.

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
