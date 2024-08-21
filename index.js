const http = require("http");
const fs = require("fs");
const url = require("url");

const createServer = http.createServer((req, res) => {
  // Disabling the favicon
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()}: ${req.url}/ New data Received \n`;

  // using url package targeting the specific value from the req.url
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);

  //creating a log file and send all of the logs and store the local dir.
  fs.appendFile("stats.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("Home Page");
        break;
      case "/about":
        const username = myUrl.query.name;
        res.end(`Hello ${username}`);
        break;
      case "/search":
        const search = myUrl.query.search_query;
        res.end("Here is your search result " + search);
      default:
        res.end("404 Page not found");
    }
  });
});

createServer.listen(8000, (req, res) => {
  console.log("server started! at port: http://localhost:8000");
});
