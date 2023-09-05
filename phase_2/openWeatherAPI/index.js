const apiKey = require('./apiKey');

const city = 'London';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

const weatherData = null;

fetch(apiUrl)
  .then((response) => response.json())
  .then((weatherData) => {
    console.log(weatherData);
    console.log('--------------------------------------------------');
    console.log(weatherData.main.temp);
    console.log('--------------------------------------------------');
    console.log(weatherData.weather[0].main);
  });

console.log('Requesting weather data...');
