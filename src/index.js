import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

const app = express();

dotenv.config({
  path: "../.env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("MongoDB connection failed !!!");
      throw error;
    });
    app.listen(process.env.PORT || 4000, () => {
      console.log(`Server Serve at port: localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDb Connection error", err);
  });
