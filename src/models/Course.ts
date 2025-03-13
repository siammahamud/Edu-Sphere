import mongoose from "mongoose";
import {Prerequisite} from "./Prerequisite";
import { CourseModel, ICourse } from "@/interfaces/course-interface";


const { Schema } = mongoose;

const courseSchema = new Schema<ICourse>(
  {
    title: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    instructor: {
      type: Schema.Types.ObjectId,
      ref: "Instructor",
      required: true,
    },
    category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
    price: { type: Number, required: true },
    discountPrice: { type: Number },
    duration: { type: String, required: true },
    thumbnail: { type: String },
    videoPreview: { type: String },
    modules:{type:Schema.Types.ObjectId, require:true, ref:"Module"},
    prerequisites: [Prerequisite], // Prerequisites for the course
    studentsEnrolled: [{ type: Schema.Types.ObjectId, ref: "Student" }], // Enrolled students
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }], // Reviews by students
  },
  { timestamps: true }
);

export const Course =
   mongoose.models.Course ??
    mongoose.model<ICourse,CourseModel>("Content", courseSchema);
  