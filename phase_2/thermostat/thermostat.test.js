const Thermostat = require('./thermostat');

describe('Thermostat', () =>{
  it('returns a temperature of 20 degrees celsius', () => {
    const thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toEqual(20)
  });
});