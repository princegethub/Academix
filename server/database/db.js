import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Connect to MongoDB with options
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true, // Use the new MongoDB parser
      useUnifiedTopology: true, // Use the new server discovery and monitoring engine
      serverSelectionTimeoutMS: 50000, // Increase timeout to 50 seconds if needed
    });

    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Error occurred while connecting to MongoDB:", error.message);
    console.error(error);

    // Exit the process if DB connection fails
    process.exit(1);
  }
};

export default connectDB;
