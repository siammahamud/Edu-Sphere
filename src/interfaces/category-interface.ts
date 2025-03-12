import { Model } from "mongoose";

export interface ICategory {
  _id: string; // Unique identifier for the category
  name: string; // Name of the category (e.g., "Math", "Science")
  description: string;
  slug: string, // A brief description of what the category is about
  createdAt: Date; // Date when the category was created
  updatedAt: Date; // Date when the category was last updated
}

export type CategoryModel = Model<ICategory, Record<string, unknown>, unknown>