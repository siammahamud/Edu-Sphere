import mongoose from "mongoose";

const { Schema} = mongoose;

const instructorSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    bio: { type: String },
    profilePicture: { type: String },
    socialLinks: {
      linkedin: { type: String },
      twitter: { type: String },
      website: { type: String },
    },
  },
  { timestamps: true }
);

export const Instructor =
  mongoose.models.Instructor ?? 
  mongoose.model("Instructor", instructorSchema);
