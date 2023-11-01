// Declare the temperature in Celsius and Fahrenheit
var temperatureInCelsius = 25;

var temperatureInFahrenheit = (temperatureInCelsius * 9/5) + 32;
var convertedTemperatureInCelsius = (temperatureInFahrenheit - 32) * 5/9;

// Print Temperature, converted from Celcius, converted from Fahreheit
console.log("Temperature in Celsius: " + temperatureInCelsius + "°C");
console.log("Temperature in Fahrenheit: " + temperatureInFahrenheit + "°F");
console.log("Converted back to Celsius: " + convertedTemperatureInCelsius + "°C");
