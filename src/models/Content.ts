import { ContentModel, IContent } from "@/interfaces/content-interface";
import mongoose from "mongoose";

const { Schema } = mongoose;


     
const contentSchema = new Schema<IContent>({
  week: { type: Number, required: true },
  title: { type: String, required: true },
  lessons: {type: Schema.Types.ObjectId, ref:"Lesson"},
});

export const Content =
   mongoose.models.Content ??
    mongoose.model<IContent,ContentModel>("Content", contentSchema);