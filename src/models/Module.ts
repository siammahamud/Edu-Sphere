import mongoose from "mongoose";

const { Schema} = mongoose;

const moduleSchema = new Schema(
  {
    courseId: { type: Schema.Types.ObjectId, ref: "Course", required: true },
    title: { type: String, required: true },
    description: { type: String },
    lessons: [{ type: Schema.Types.ObjectId, ref: "Lesson" }], // Reference to Lessons
  },
  { timestamps: true }
);

export const Module =
  mongoose.models.Module ?? 
  mongoose.model("Module", moduleSchema);
