const http = require("http");
const fs = require("fs");
const url = require("url");

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.send("hello world");
});

app.get("/about", (req, res) => {
  return res.send(
    "Hello " + req.query.name + " You are " + req.query.age + " years old."
  );
});

const myServer = http.createServer(app);

myServer.listen(8000, (req, res) => {
  console.log("server started! at port: http://localhost:8000");
});

// const createServer = http.createServer((req, res) => {
//   // Disabling the favicon
//   if (req.url === "/favicon.ico") return res.end();
//   const log = `${Date.now()}:${req.method} ${req.url}/ New data Received \n`;

//   // using url package targeting the specific value from the req.url
//   const myUrl = url.parse(req.url, true);
//   console.log(myUrl);

//   //creating a log file and send all of the logs and store the local dir.
//   fs.appendFile("stats.txt", log, (err, data) => {
//     switch (myUrl.pathname) {
//       case "/":
//         res.end("Home Page");
//         break;
//       case "/about":
//         const username = myUrl.query.name;
//         res.end(`Hello ${username}`);
//         break;
//       case "/search":
//         const search = myUrl.query.search_query;
//         res.end("Here is your search result " + search);
//       default:
//         res.end("404 Page not found");
//     }
//   });
// });
