import { IQuiz, QuizModel } from "@/interfaces/quiz-interface";
import mongoose from "mongoose";

const { Schema } = mongoose;

const quizSchema = new Schema<IQuiz>(
  {
    title: { type: String, required: true },
    lessonId: { type: Schema.Types.ObjectId, ref: "Lesson", required: true },
    questions: [
      {
        question: { type: String, required: true },
        options: [{ type: String, required: true }],
        correctAnswer: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

export const Quiz =
  mongoose.models.Quiz ?? 
  mongoose.model<IQuiz, QuizModel>("Quiz", quizSchema);
