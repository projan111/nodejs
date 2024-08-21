const http = require("http");
const fs = require("fs");

const createServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()}: ${req.url}/ New data Received \n`;

  fs.appendFile("stats.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("Home Page");
        break;
      case "/about":
        res.end("This is Projan1111");
        break;
      default:
        res.end("404 Page not found");
    }
  });
});

createServer.listen(8000, (req, res) => {
  console.log("server started! at port: http://localhost:8000");
});
