const apiKey = require('./apiKey');

class WeatherClient {
  fetchWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

    return fetch(apiUrl)
      .then((response) => response.json());
  }
}

module.exports = WeatherClient;
