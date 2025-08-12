import express from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";

const app = express();

app.get("/", (req, res) => res.send("hello from the server"));

const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () =>
      console.log("server is running on port:", ENV.PORT)
    );
  } catch (error) {
    console.error("Error starting the server:", error.message);
    process.exit(1); // Exit the process with a failure code
  }
};
startServer();
