const { nextISSTimesForMyLocation } = require("./iss");

const printPassTimes = (passTimes) => {
  for (const passTime of passTimes) {
    const dateTime = new Date(0);
    dateTime.setUTCSeconds(passTime.risetime);
    const duration = passTime.duration;
    console.log(`Next pass at ${dateTime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    console.log("It didnt work!", error);
    return;
  }
  printPassTimes(passTimes);
});

module.exports = {printPassTimes};
