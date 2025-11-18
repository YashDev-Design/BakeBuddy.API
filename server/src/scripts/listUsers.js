import dotenv from "dotenv";
import mongoose from "mongoose";
import User from "../models/user.model.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);
console.log("🗂 All Users:");
console.log(await User.find());
process.exit(0);
