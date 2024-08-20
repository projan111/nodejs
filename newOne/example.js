const fs = require("fs").promises;
const path = require("path");

const moveFile = async () => {
  try {
    const fileSource = path.join(__dirname, "example.js");
    const fileDestination = path.join(__dirname, "newOne", "example.js");

    await fs.rename(fileSource, fileDestination, (err) => {
      if (err) {
        console.log("error moving file", err);
      } else {
        console.log("File moved successfully");
      }
    });
  } catch (error) {
    console.log("New error occured while moving file", error);
  }
};

module.exports = { moveFile };
