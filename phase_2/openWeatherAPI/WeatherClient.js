const apiKey = require('./apiKey');

class WeatherClient {
  fetchWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((weatherData) => {
        this.message = `Weather data for ${weatherData.name}:`;
        console.log(this.message);
        console.log(weatherData);
      });
  }
}

module.exports = WeatherClient;
