const request = require("request-promise-native");

const fetchMyIP = () => request("https://api.ipify.org?format=json");

const fetchCoordsByIP = (body) => {
  const ip = JSON.parse(body).ip;
  return request(`https://freegeoip.app/json/${ip}`);
};
const fetchFlyOverTimes = (body) => {
  const { latitude, longitude } = JSON.parse(body);
  return request(
    `http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`
  );
};

const nextISSFlyOverTime = () => {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchFlyOverTimes)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
    });
};

module.exports = { nextISSFlyOverTime };
