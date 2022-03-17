const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require("./iss");

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didnt work!", error);
//     return;
//   }
//   console.log("It worked! Returned IP:", ip);
// });

// fetchCoordsByIP("68.69.149.6", (error, data) => {
//   if (error) {
//     console.log("It didnt work!", error);
//     return;
//   }
//   console.log("It worked! Returned coordinates:", data);
// });


fetchISSFlyOverTimes({latitude: 43.6989, longitude: -80.3619}, (error, data) => {
  if (error) {
        console.log("It didnt work!", error);
        return;
      }
      console.log("It worked! Returned times and duration:", data);
  
});