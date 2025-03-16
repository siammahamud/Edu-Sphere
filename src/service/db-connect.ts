import mongoose from "mongoose";
async function dbConnect() {
  try {
    const connection =  await mongoose.connect(String(process.env.MONGODB_CONNECTION_STRING));
    console.log("connected to mongodb");
    return connection;
  } catch (error) {
    console.error("Failed to connect with mongodb",error);  
  }
}

export default dbConnect;
