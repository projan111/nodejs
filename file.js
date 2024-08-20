const fs = require("fs");

//Sync
// fs.writeFileSync("./text.txt", "Hello, I am from the nodejs.");

//Async
// fs.writeFile("./text.txt", "Hello, I am from the nodejs | Async.", (err) => {});

// const result = fs.readFileSync("./contact.txt", "utf-8")
// console.log(result)

// fs.readFile("./contact.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log("File Error", err);
//   } else {
//     console.log(result);
//   }
// });



const createFiles = () => {
  fs.writeFileSync("example.js", "console.log('Hello from the file create')")

}

module.exports = createFiles;
