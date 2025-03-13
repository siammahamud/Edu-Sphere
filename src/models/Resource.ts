import { IResource } from "@/interfaces/content-interface";
import { ResourceModel } from "@/interfaces/resource-interface";
import mongoose from "mongoose";

const { Schema } = mongoose;

const resourceSchema = new Schema<IResource>(
  {
    title: { type: String, required: true },
    lessonId: { type: Schema.Types.ObjectId, ref: "Lesson", required: true },
    type: { type: String, enum: ["pdf", "doc", "link"], required: true },
    url: { type: String, required: true },
  },
  { timestamps: true }
);

export const Resource =
  mongoose.models.Resource ?? 
  mongoose.model<IResource, ResourceModel>("Resource", resourceSchema);
