import mongoose from "mongoose";

const { Schema } = mongoose;

const lessonSchema = new Schema({
  title: { type: String, required: true },
  videoUrl: { type: String, required: true },
  resources: [
    {
      type: { type: String, enum: ["pdf", "link", "doc"], required: true },
      url: { type: String, required: true },
    },
  ],
  quiz: [
    {
      question: { type: String, required: true },
      options: [{ type: String, required: true }],
      answer: { type: String, required: true },
    },
  ],
});

const contentSchema = new Schema({
  week: { type: Number, required: true },
  title: { type: String, required: true },
  lessons: [lessonSchema],
});

export const Content =
  mongoose.models.Content ??
  mongoose.model("Content", contentSchema);
