import mongoose from "mongoose";

const { Schema} = mongoose;

const categorySchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String },
    slug: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export const Category =
  mongoose.models.Category ??
  mongoose.model("Category", categorySchema);
