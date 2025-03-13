import { Model, Types } from "mongoose";

export interface IModule {
  courseId: Types.ObjectId;
  title: string;
  description?: string;
  lessons: Types.ObjectId[];
}

export type ModuleModel = Model<IModule, Record<string, unknown>, unknown>;
