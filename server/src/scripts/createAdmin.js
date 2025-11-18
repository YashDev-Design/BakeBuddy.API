import dotenv from "dotenv";
import mongoose from "mongoose";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";

dotenv.config();

async function createAdmin() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("📦 Connected to MongoDB");

    const adminEmail = "admin@bakebuddy.com";
    const adminPassword = "Admin@123"; // you can change this
    const adminUser = await User.findOne({ email: adminEmail });

    if (adminUser) {
      console.log("⚠️ Admin already exists:", adminEmail);
      return process.exit(0);
    }

    const newAdmin = new User({
      username: "BakeBuddy Admin",
      email: adminEmail,
      password: adminPassword,
      role: "admin",
    });

    await newAdmin.save();
    console.log("🎉 Admin created successfully!");
    console.log("Login with:");
    console.log("EMAIL:", adminEmail);
    console.log("PASSWORD:", adminPassword);

    process.exit(0);
  } catch (err) {
    console.error("❌ Error creating admin:", err);
    process.exit(1);
  }
}

createAdmin();
