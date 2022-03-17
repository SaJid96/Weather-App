const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = ` http://api.weatherstack.com/current?access_key=8fa9376312ed6fbe00df19081a51ff15&query=${latitude},${longitude}&units=f`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connnect to weather service', undefined);
    } else if (body.error) {
      callback('unable to find the location', undefined);
    } else {
      let degrees = body.current.temperature;
      let feels = body.current.feelslike;
      let forecast = body.current.weather_descriptions[0];
      callback(
        undefined,
        `${forecast}F. it is currently ${degrees}F degrees out. It feels like ${feels} degrees out`
      );
    }
  });
};

module.exports = forecast;
