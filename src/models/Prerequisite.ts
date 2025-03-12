import mongoose from "mongoose";

const { Schema} = mongoose;

const prerequisiteSchema = new Schema({
  courseId: { type: Schema.Types.ObjectId, ref: "Course", required: true },
  description: { type: String, required: true },
});

export const Prerequisite =
  mongoose.models.Prerequisite ??
  mongoose.model("Prerequisite", prerequisiteSchema);
