const convertToCelsius = function (tempF) {
  // Subtract 32 from the Fahrenheit value
  // Multiply the result by 5/9

  const tempC = (tempF - 32) * (5 / 9);
  return Math.round(tempC * 10) / 10;
};

const convertToFahrenheit = function (tempC) {
  return Math.round(((tempC * 9) / 5 + 32) * 10) / 10;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
