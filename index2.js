const { nextISSFlyOverTime } = require("./iss_promises");
const { printPassTimes } = require("./index");

nextISSFlyOverTime()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log('It didn"t work', error.message);
  });
