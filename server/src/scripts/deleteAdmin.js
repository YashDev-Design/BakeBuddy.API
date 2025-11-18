import dotenv from "dotenv";
import mongoose from "mongoose";
import User from "../models/user.model.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);
console.log("🗑 Deleting all admins...");

await User.deleteMany({ role: "admin" });

console.log("✔ Done!");
process.exit(0);
