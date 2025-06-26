import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  if (connected) {
    console.log("🎉 MongoDB is already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    connected = true;
    console.log("MongoDB connected successfully ✅");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default connectDB;
