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

//set up viewEngine ejs
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));
app.use(
  session({
    secret: "MySecret", //secreat because no onw ill have access to the code it will be encrypt
    saveUninitialized: false, //anytime we reolod the browser the session will be lost
    resave: false,
  })
);

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
