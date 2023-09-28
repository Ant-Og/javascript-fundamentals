class Weather {
  constructor(client) {
    this.client = client;
  }

  async load(city) {
    this.data = await this.client.fetchWeatherData(city);
    this.city = city;
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

  async compareWith(cityTwo) {
    this.dataTwo = await this.client.fetchWeatherData(cityTwo);
    this.cityTwo = cityTwo;
    if (this.data.main.temp > this.dataTwo.main.temp) {
      console.log(`${this.city} (${this.data.main.temp}) is warmer than ${cityTwo} (${this.dataTwo.main.temp})`);
    } else if (this.data.main.temp < this.dataTwo.main.temp) {
      console.log(`${this.cityTwo} (${this.dataTwo.main.temp}) is warmer than ${this.city} ((${this.data.main.temp}))`);
    } else {
      console.log(`${this.city} ((${this.data.main.temp})) is the same temperature as ${cityTwo} ((${this.dataTwo.main.temp}))`);
    }
  }
}

module.exports = Weather;
