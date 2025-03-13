import { IPrerequisite, PrerequisiteModel } from "@/interfaces/prerequisite-interface";
import mongoose from "mongoose";

const { Schema} = mongoose;

const prerequisiteSchema = new Schema<IPrerequisite>({
  courseId: { type: Schema.Types.ObjectId, ref: "Course", required: true },
  description: { type: String, required: true },
});

export const Prerequisite =
  mongoose.models.Prerequisite ??
  mongoose.model<IPrerequisite, PrerequisiteModel>("Prerequisite", prerequisiteSchema);
