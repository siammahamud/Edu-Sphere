import { Model, Types } from "mongoose";
export interface IResource {
    title: string;
    lessonId: Types.ObjectId;
    type: "pdf" | "doc" | "link";
    url: string;
  }
  
  export type ResourceModel = Model<IResource, Record<string, unknown>, unknown>;
  