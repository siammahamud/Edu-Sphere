import { Model } from "mongoose";
export interface IResource {
  type: "pdf" | "link" | "doc";
  url: string;
}

export interface IQuizQuestion {
  question: string;
  options: string[];
  answer: string;
}

export interface ILesson {
  _id: string;
  title: string;
  videoUrl: string;
  resources: IResource[];
  quiz: IQuizQuestion[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IContent {
  _id: string; // Unique identifier for the content
  courseId: string; // Reference to the course this content belongs to
  title: string; // Title of the content (e.g., "Introduction to JavaScript")
  description: string;
  week: number;
  lessons: object; // Description of the content
  contentType: "video" | "article" | "pdf" | "assignment"; // Type of content
  url: string; // URL or path to the content (e.g., video link or document)
  createdAt: Date; // Date when the content was created
  updatedAt: Date; // Date when the content was last updated
}

export type ContentModel = Model<IContent, Record<string, unknown>, unknown>;
export type LessonModel = Model<ILesson, Record<string, unknown>, unknown>;
