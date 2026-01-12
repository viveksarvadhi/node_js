// // // // 
// var fs = require('fs');
// var os = require('os');
// var _  = require('lodash');
// // // var user = os.userInfo();
// // // console.log(user.username);

// // // // Read file asynchronously
// // // fs.readFile('myfile.txt', 'utf8', (err, data) => {
// // //   if (err) {
// // //     console.error('Error reading file: ' + err);
// // //     return;
// // //   }
// // //   console.log('File content: ' + data);
// // // });

// // // console.log('Reading file... (this runs first!)');

// // const http = require('http');

// // const PORT = 8080;

// // http.createServer((req, res) => {
// //   res.writeHead(200, {'Content-Type': 'text/plain'});
// //   res.end('Hello World!');
// // }).listen(PORT, () => {
// //   console.log(`Server running at http://localhost:${PORT}`);
// // });

// const notes = require('./notes.js');
// console.log("this file is from server.js");

// var age = notes.age;
// console.log(age);

// var data = [1,2,2,3,2,2,3,2,1,2,3,];
// var f = _.uniq(data);
// console.log(f);

//create a server 



// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000')
// })
const colors = require('colors');
const http = require('http'); // if you still use it

const express = require('express');

const app = express()
app.get('/', function (req, res) {
res.send('Welcome to my hotel... How i can help you?, we have list of menus')
})

app.get('/chicken', (req, res)=>{
res.send('sure sir, i would love to serve chicken')
})

app.get('/idli', (req, res)=>{
var customized_idli = {
      name: 'rava idli',
      size: '10 cm diameter',
      is_sambhar: true,
      is_chutney: false
}
res.send(customized_idli)
})

app.listen(3000, ()=>{
})
console.log(colors.red('listening on port 3000'));