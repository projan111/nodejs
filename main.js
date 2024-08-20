const fs = require("fs");
// const cFiles = require("./file");
const { moveFile } = require("./newOne/example");

// Create File
// cFiles();
moveFile();

// Read just created file
// fs.readFile("./example.js", "utf-8", (err, result) => {
//   if (err) {
//     console.log("File is missing", err);
//   } else {
//     fs.renameSync("./example.js", "newFile")
//     console.log(result);
//     // fs.unlinkSync("./example.js")
//   }
// });

