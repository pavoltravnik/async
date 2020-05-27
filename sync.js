const axios = require("axios");

const getData = (url, message = "", startTime, greeting) => {
  console.log(`${(Date.now() - startTime) / 1000}s started ${message}`);
  const request = axios.get(url);
  return request
    .then((response) => {
      console.log(`${(Date.now() - startTime) / 1000}s finished ${message}`);
      typeof greeting === "function" && greeting();
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
};
(() => {
  function greeting() {
    getData("http://httpstat.us/200?sleep=4000", "B request", startTime);
    getData("http://httpstat.us/200?sleep=1000", "C request", startTime);
    getData("http://httpstat.us/200?sleep=1000", "D request", startTime);
    getData("http://httpstat.us/200?sleep=3000", "E request", startTime);
  }

  const startTime = Date.now();
  getData("http://httpstat.us/200?sleep=3000", "A request", startTime, greeting);
})();
