import { Model, Types } from "mongoose";

export interface IQuiz {
    title: string;
    lessonId: Types.ObjectId;
    questions: {
      question: string;
      options: string[];
      correctAnswer: string;
    }[];
  }
  
  export type QuizModel = Model<IQuiz, Record<string, unknown>, unknown>;