import { Model, Types } from "mongoose";
export interface IStudent {
  userId: Types.ObjectId;
  progress: number;
  completedLessons: Types.ObjectId[];
}

export type StudentModel = Model<IStudent, Record<string, unknown>, unknown>;
