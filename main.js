const cFiles = require("./file")
const fs = require("fs");

// Create File
cFiles()

// Read just created file
fs.readFile("./example.js", "utf-8", (err, result) => {
  if (err) {
    console.log("File is missing", err);
  } else {
    console.log(result);
    // fs.unlinkSync("./example.js")
  }
});
