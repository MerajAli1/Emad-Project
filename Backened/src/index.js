import { app } from "./app.js";
import connectDB from "./db/DB.js";
// import dotenv from "dotenv";
// const http = require("http");
import http from "http"
// dotenv.config({
//   path: "./env",
// });

const server = http.createServer(app);
connectDB()
  .then(() => {
    server.listen(1000, () => {
      console.log("server is running on port", 1000);
    });
  })
  .catch((error) => {
    console.log("mongoDB connection failed....", error);
  });
