import dotenv from "dotenv";
import express from "express";
import connectDatabase from "./db/connect.js";
import mongoose from "mongoose";

// Router
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import usersRoute from "./routes/users.js";

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Api");
});

app.use(express.json());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/hotels", hotelsRoute);
app.use("/api/v1/rooms", roomsRoute);
app.use("/api/v1/users", usersRoute);

// middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

const start = async () => {
  const port = 8080;
  try {
    await connectDatabase(process.env.MONGODB_URL);
    app.listen(port, () => {
      console.log(`connected to backend server on port ${port}....!`);
    });
  } catch (error) {
    throw new Error(`Failed to connect to backend server on port ${port}...`);
  }
};

mongoose.connection.on("connected", () => {
  console.log("connected to backend server");
});

mongoose.connection.on("disconnected", () => {
  console.log("disconnected to backend server");
});

start();
