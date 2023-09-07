const jestFetchMock = require('jest-fetch-mock');
jestFetchMock.enableMocks();

const WeatherClient = require('./weatherClient');
const Weather = require('./weather');

describe('Weather', () => {
  it('takes the data object returned by the client', (done) => {
    const mockClient = {
      fetchWeatherData: jest.fn(),
    };

    mockClient.fetchWeatherData.mockResolvedValueOnce({
      name: 'Tokyo',
      weather: 'Clouds',
    });

    const myWeather = new Weather(mockClient);
    myWeather.load('Tokyo').then(() => {
      expect(mockClient.fetchWeatherData).toHaveBeenCalledWith('Tokyo');
      done();
    });
  });
});
