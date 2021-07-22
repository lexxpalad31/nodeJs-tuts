// BUILT IN MODULES

// const os = require("os");

// //info about the current user
// const user = os.userInfo();
// console.log(user);

// // method returns the system uptime in seconds
// console.log(`The system uptime is ${os.uptime()} seconds`);

// const currentOS = {
//   name: os.type(),
//   release: os.release(),
//   totalMem: os.totalmem(),
//   freeMem: os.freemem(),
// };

// console.log(currentOS);

// <------------------------------------------------------------------------------------------>
// const path = require("path");

// console.log(path.sep);

// const filePath = path.join("content", "subfolder", "test.txt");
// console.log(filePath);

// const base = path.basename(filePath);
// console.log(base);

// const absPath = path.resolve(__dirname, "content", "subfolder", "test.txt");
// console.log(absPath);

// <------------------------------------------------------------------------------------------>
// const { readFileSync, writeFileSync } = require("fs");

// const first = readFileSync("./content/first.txt", "utf8");
// const second = readFileSync("./content/second.txt", "utf8");

// console.log(first);
// console.log(second);

// writeFileSync(
//   "./content/third.txt",
//   `Here is the result: ${first} , ${second}`,
//   { flag: "a" }
// );
// <------------------------------------------------------------------------------------------>

// const { readFile, writeFile } = require("fs");

// readFile("./content/first.txt", "utf8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   const first = result;
//   readFile("./content/second.txt", "utf8", (err, result) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     const second = result;
//     writeFile(
//       "./content/fourth.txt",
//       `Here is the result: ${first} , ${second}`,
//       (err, result) => {
//         if (err) {
//           console.log(err);
//           return;
//         }
//         console.log(result);
//       }
//     );
//   });
// });

// <------------------------------------------------------------------------------------------>

// http

// const http = require("http");
// const { isRegExp } = require("util");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.end("Welcome to our homepage");
//   }
//   if (req.url === "/about") {
//     res.end("Here is our short history");
//   } else {
//     res.end(
//       `<h1>Oops! <p>We can't find the page url</p> <a href="/">Back home</a>`
//     );
//   }
// });

// server.listen(5000);
