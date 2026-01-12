const fs = require("fs");

fs.writeFileSync("hello.txt", "Hello from Node");

console.log("File created");



const data = fs.readFileSync("hello.txt", "utf8");
console.log(data);
