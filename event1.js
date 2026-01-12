const EventEmitter = require("events");

const myEmitter = new EventEmitter();

// listen
myEmitter.on("foodReady", () => {
  console.log("I will eat now 😄");
});

// trigger
myEmitter.emit("foodReady");
