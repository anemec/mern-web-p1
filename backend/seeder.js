import mongoose from "mongoose";
import Box from "./models/boxModel.js";
import connectDB from "./config/db.js";
import { boxes } from "./data/boxes.js";
import dotenv from "dotenv";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Box.deleteMany();
    await Box.insertMany(boxes);
    console.log("Data imported!");
    process.exit();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

importData();
