const axios = require("axios");
const getData = async (url, message = "",startTime) => {
  try {
    console.log(`${(Date.now() - startTime) / 1000}s started ${message}`);
    const response = await axios.get(url);
    console.log(`${(Date.now() - startTime) / 1000}s finished ${message}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
(async () => {
  const startTime =  Date.now();
  await getData("http://httpstat.us/200?sleep=3000", "A request synchronous",startTime);
  await Promise.all([
    getData("http://httpstat.us/200?sleep=4000", "B request asynchronous", startTime),
    getData("http://httpstat.us/200?sleep=1000", "C request asynchronous", startTime),
    getData("http://httpstat.us/200?sleep=1000", "D request asynchronous", startTime),
    getData("http://httpstat.us/200?sleep=3000", "E request asynchronous", startTime),
  ]);
  await getData("http://httpstat.us/200?sleep=3000", "F request synchronous", startTime);
})();