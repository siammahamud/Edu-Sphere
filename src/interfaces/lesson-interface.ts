import { Model, Types } from "mongoose";

export interface ILesson {
  _id?: Types.ObjectId,
  moduleId: Types.ObjectId,
  title: string,
  videoUrl: string,
  quiz?: Types.ObjectId, // Optional reference to Quiz
  resources?: Types.ObjectId[], // Array of references to Resources
  createdAt?: Date,
  updatedAt?: Date,
}
export type LessonModel = Model<ILesson, Record<string, unknown>, unknown>;