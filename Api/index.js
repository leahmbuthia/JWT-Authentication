import express from "express";

import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./routes/authRoutes.js";
import bodyParser from "body-parser";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server running PORT :${PORT}`);
});

app.use(bodyParser.json());
app.use(express.json());
app.use("/api", authRouter);

// MongoDB connection URI from environment variables
mongoose.connect(process.env.MONGO).then(() =>{
  console.log('connected to MongoDB');
}).catch((err) => {
  console.log(err,"this is error");
});


