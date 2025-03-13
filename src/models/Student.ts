import { IStudent, StudentModel } from "@/interfaces/student-interface";
import mongoose from "mongoose";

const { Schema } = mongoose;

const studentSchema = new Schema<IStudent>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  progress: { type: Number, default: 0 }, // percentage of course completed
  completedLessons: [{ type: Schema.Types.ObjectId, ref: "Lesson" }],
});

export const Student =
  mongoose.models.Student ?? 
  mongoose.model<IStudent, StudentModel>("Student", studentSchema);

