const path = require("path");

console.log("Current file path:");
console.log(__filename);

console.log("\nCurrent folder path:");
console.log(__dirname);

// join paths safely
const filePath = path.join(__dirname, "images", "photo.png");
console.log("\nJoined path:");
console.log(filePath);

// get only file name
console.log("\nFile name:");
console.log(path.basename(filePath));

// get file extension
console.log("\nFile extension:");
console.log(path.extname(filePath));

// get folder path
console.log("\nFolder path:");
console.log(path.dirname(filePath));
