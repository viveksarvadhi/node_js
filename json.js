const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const jsonObject = JSON.parse(jsonString); // Convert JSON string to obje
console.log(jsonObject.name); // Output: John
const objectToConvert = { name: "Alice", age: 25 };
const jsonStringified = JSON.stringify(objectToConvert); // Convert objecJSON string
console.log(jsonStringified); // Output: {"name": "Alice", "age":25}