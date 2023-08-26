class Thermostat {

  constructor() {
    this.temperature = 20;
  }

  getTemperature() {
    return this.temperature;
  }

  up(degreesUp) {
    if(degreesUp === undefined) {
      this.temperature += 1;
    } else {
      this.temperature += degreesUp;
    }
  }
}

module.exports = Thermostat;