import { Model, Types } from "mongoose";
export interface IPrerequisite {
  courseId: Types.ObjectId;
  description: string;
}

export type PrerequisiteModel = Model<
  IPrerequisite,
  Record<string, unknown>,
  unknown
>;
