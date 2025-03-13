import { IReview, ReviewModel } from "@/interfaces/review-interface";
import mongoose from "mongoose";

const { Schema } = mongoose;

const reviewSchema = new Schema<IReview>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    courseId: { type: Schema.Types.ObjectId, ref: "Course", required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    comment: { type: String },
  },
  { timestamps: true }
);

export const Review =
  mongoose.models.Review ??
   mongoose.model<IReview, ReviewModel>("Review", reviewSchema);
