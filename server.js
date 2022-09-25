//Import eThird party modules
import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import session from "express-session";

//ES modules fix for __dirname
import path, { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = fileURLToPath(import.meta.url);

//instance app-server
const app = express();

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
