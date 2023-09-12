const fs = require("fs");
const process = require("process");
const axios = require("axios");

const path = process.argv[2];

const init = async (path) => {
  fs.readFile(path, "utf8", async (err, data) => {
    if (err) {
      console.log(`Error reading file ${path}:`);
      process.exit(1);
    }
    let dataArr = await getUrlData(data);
    writeToFile(dataArr);
  });
};

const getUrlData = async (data) => {
  let urls = data.split("\n");
  const urlData = await Promise.all(
    urls.map(async (url) => {
      try {
        const data = await axios.get(url);
        return [url, data.data];
      } catch (err) {
        console.log(`Error fetching ${url}:`);
        return "null";
      }
    })
  );
  return urlData.filter((data) => data !== "null");
};

const writeToFile = (urlData) => {
  for ([url, data] of urlData) {
    url = url.split("/")[2];
    fs.writeFile(url, data, "utf8", (err) => {
      if (err) {
        console.log(`Error writing to file ${url}:`);
        process.exit(1);
      }
    });
  }
};

init(path);