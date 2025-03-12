import { CategoryModel, ICategory } from "@/interfaces/category-interface";
import mongoose from "mongoose";

const { Schema} = mongoose;

const categorySchema = new Schema<ICategory>(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String },
    slug: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export const Category =
  mongoose.models.Category ??
  mongoose.model<ICategory,CategoryModel>("Category", categorySchema);
