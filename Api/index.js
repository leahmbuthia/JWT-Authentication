import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./routes/authRoutes.js";
import bodyParser from "body-parser";
import cors from "cors";
import { createAdminAccount } from "./script/setup.js";

dotenv.config();

const app = express();

const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // Adjust timeout settings as needed
  socketTimeoutMS: 45000, // Set socket timeout to 45 seconds
  connectTimeoutMS: 30000, // Set connect timeout to 30 seconds
};

// MongoDB connection URI from environment variables
mongoose.connect(process.env.MONGO, mongooseOptions)
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

  // Enable CORS
app.use(cors());
createAdminAccount();


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server running PORT :${PORT}`);
});

app.use(bodyParser.json());
app.use(express.json());
app.use("/api", authRouter);



