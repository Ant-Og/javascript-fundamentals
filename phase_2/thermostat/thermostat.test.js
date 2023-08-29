const Thermostat = require('./thermostat');

describe('Thermostat', () =>{
  it('returns a temperature of 20 degrees celsius', () => {
    const thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toEqual(20)
  });

  it('Increases the temperature by 1 degree celcius', () => {
    const thermostat = new Thermostat();
    thermostat.up(1);
    expect(thermostat.getTemperature()).toEqual(21)
  });

  it('increases the temperature by 2 degrees celcius', () => {
    const thermostat = new Thermostat();
    thermostat.up(2);
    expect(thermostat.getTemperature()).toEqual(22)
  });

  it('decreases the temperature by 1 degree celcius', () => {
    const thermostat = new Thermostat();
    thermostat.down(1);
    expect(thermostat.getTemperature()).toEqual(19)
  });

  it('decreases the temperature by 2 degrees celcius', () => {
    const thermostat = new Thermostat();
    thermostat.down(2);
    expect(thermostat.getTemperature()).toEqual(18)
  });

  it('cannot decrease the temperature below 10 degrees celcius', () => {
    const thermostat = new Thermostat();
    expect(thermostat.down(11)).toEqual('The temperature has been set to 10 degrees celcius and cannot be set below')
    expect(thermostat.getTemperature()).toEqual(10)
  });

  it('cannot increase the temperature above 25 degrees celcius when power saving mode is on', () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingModeOnOff('on');
    thermostat.up(6);
    expect(thermostat.getTemperature()).toEqual(25)
  });
});

