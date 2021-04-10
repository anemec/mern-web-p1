import mongoose from "mongoose";
import Box from "./models/boxModel.js";
import User from "./models/userModel.js";
import connectDB from "./config/db.js";
import { boxes } from "./data/boxes.js";
import users from "./data/users.js";
import dotenv from "dotenv";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Box.deleteMany();
    await User.deleteMany();
    await Box.insertMany(boxes);
    await User.insertMany(users);
    console.log("Data imported!");
    process.exit();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

importData();
