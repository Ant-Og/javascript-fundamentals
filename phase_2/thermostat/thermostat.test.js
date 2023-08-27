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

  it('decreases the temperature by 1 degree celcius', () => {
    const thermostat = new Thermostat();
    thermostat.down();
    expect(thermostat.getTemperature()).toEqual(19)
  });

  it('decreases the temperature by 2 degrees celcius', () => {
    const thermostat = new Thermostat();
    thermostat.down(2);
    expect(thermostat.getTemperature()).toEqual(18)
  });

  it('cannot decrease the temperature below 10 degrees celcius', () => {
    const thermostat = new Thermostat();
    expect(thermostat.down(11)).toEqual('Temperature cannot be set below 10 degrees celcius')
    expect(thermostat.getTemperature()).toEqual(20)
  });
});

