const Thermostat = require('./thermostat');

describe('Thermostat', () =>{
  it('returns a temperature of 20 degrees celsius', () => {
    const thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toEqual(20)
  });

  it('Increases the temperature by 1 degree celcius', () => {
    const thermostat = new Thermostat();
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual(21)
  });

  it('increases the temperature by 2 degrees celcius', () => {
    const thermostat = new Thermostat();
    thermostat.up(2);
    expect(thermostat.getTemperature()).toEqual(22)
  });
});

