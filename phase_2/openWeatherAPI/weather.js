class Weather {
  constructor(client) {
    this.client = client;
  }

  async load(city) {
    this.data = await this.client.fetchWeatherData(city);
  }

  getWeatherData() {
    return this.data;
  }

  displayWeather() {
    console.log('-------------------------------------------');
    console.log(`Weather data for ${this.data.name}`);
    console.log('-------------------------------------------');
    console.log(`City: ${this.data.name}`);
    console.log(`Weather: ${this.data.weather[0].description}`);
    console.log(`Temperature: ${this.data.main.temp}`);
    console.log(`Wind: ${this.data.wind.speed}`);
  }
}

module.exports = Weather;
