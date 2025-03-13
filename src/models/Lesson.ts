import { ILesson, LessonModel } from "@/interfaces/lesson-interface";
import mongoose from "mongoose";

const { Schema } = mongoose;

const lessonSchema = new Schema<ILesson>(
  {
    moduleId: { type: Schema.Types.ObjectId, ref: "Module", required: true },
    title: { type: String, required: true },
    videoUrl: { type: String, required: true },
    quiz: { type: Schema.Types.ObjectId, ref: "Quiz" }, // Referencing Quiz
    resources: [{ type: Schema.Types.ObjectId, ref: "Resource" }], // Referencing Resources
  },
  { timestamps: true }
);

export const Lesson =
  mongoose.models.Lesson ?? 
  mongoose.model<ILesson, LessonModel>("Lesson", lessonSchema);

