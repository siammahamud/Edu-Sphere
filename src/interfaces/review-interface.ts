import { Model, Types } from "mongoose"
export interface IReview {
  userId: Types.ObjectId;
  courseId: Types.ObjectId;
  rating: number;
  comment?: string;
}

export type ReviewModel = Model<IReview, Record<string, unknown>, unknown>;
