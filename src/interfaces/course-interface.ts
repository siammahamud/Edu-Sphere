import { Model, Types } from "mongoose";
import { IPrerequisite } from "./prerequisite-interface";

export interface ICourse {
    _id?: Types.ObjectId;
    title: string;
    slug: string;
    description: string;
    instructor: Types.ObjectId;
    category: Types.ObjectId;
    price: number;
    discountPrice?: number;
    duration: string;
    thumbnail?: string;
    videoPreview?: string;
    modules: Types.ObjectId;
    prerequisites: IPrerequisite[];
    studentsEnrolled: Types.ObjectId[];
    reviews: Types.ObjectId[];
    createdAt?: Date;
    updatedAt?: Date;
} 

export type CourseModel = Model<ICourse, Record<string, unknown>, unknown>;