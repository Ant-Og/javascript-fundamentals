const { on } = require("events");

class Thermostat {

  constructor() {
    this.temperature = 20;
    this.powerSavingMode = true;
    this.maxTemp = 25;
    this.minTemp = 10;
  }

  getTemperature() {
    return this.temperature;
  }

  up(degreesUp) {
    if (this.temperature + degreesUp < this.maxTemp) {
      this.temperature += degreesUp;
      let message = `The temperature has been set to ${this.maxTemp} degrees celcius`
      return message
    } else {
      this.temperature = this.maxTemp //25 degrees
      let message = `The temperature has been set to ${this.maxTemp} degrees celcius and cannot be set above 25 degrees celcius in PSM, or above 32 degrees celcius when PSM is off`;
      return message;
    }
  }

  down(degreesDown) {
    if(this.temperature - degreesDown <= 10) {
      this.temperature = this.minTemp
      console.log(this.temperature)
      let message = 'The temperature has been set to 10 degrees celcius and cannot be set below';
      return message;
    } else {
      this.temperature -= degreesDown;
      let message = `The temperature has been set to ${this.minTemp} degrees celcius`
      return message;
    }
  }

  setPowerSavingModeOnOff(value) {
    console.log(this.maxTemp)
    if(value === 'on') {
      this.powerSavingMode = true;
      this.maxTemp = 25;
      let message = 'PSM is on'
      return message
    } else if(value === 'off') {
      this.powerSavingMode = false;
      this.maxTemp = 32;
      let message = 'PSM is off'
      return message
    }
  }
}

module.exports = Thermostat;