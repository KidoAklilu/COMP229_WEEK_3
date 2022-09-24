//Import third party Using connect
const connect = require("connect");

//instance app-server
const app = connect();

//custom middleware
function helloWorld(req, res, next) {
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
}

function byeWorld(req, res, next) {
  res.setHeader("Content-Type", "text/plain");
  res.end("Good bye World");
}

//add middeleware to connect application
app.use("/hello", helloWorld);
app.use("/bye", byeWorld);
app.use("/", helloWorld);

//run app
app.listen(3000);

console.log("Server runnning at http://localhost:3000");
