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

  down(degreesDown) {
    if(this.temperature - degreesDown <= 10) {
      let message = 'Temperature cannot be set below 10 degrees celcius'
      return message
    } else {
      if(degreesDown === undefined) {
        return this.temperature -= 1;
      } else {
        return this.temperature -= degreesDown;
      }
    }
  }
}

module.exports = Thermostat;