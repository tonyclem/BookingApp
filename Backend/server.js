import dotenv from "dotenv";
import express from "express";
import connectDatabase from "./db/connect.js";

dotenv.config();
const app = express();

const port = 8080;

const start = async () => {
  try {
    await connectDatabase(process.env.MONGODB_URL);
    app.listen(port, () => {
      console.log(`connected to backend server on port ${port}....!`);
    });
  } catch (error) {
    throw new Error(`Failed to connect to backend server on port ${port}...`);
  }
};

start();
