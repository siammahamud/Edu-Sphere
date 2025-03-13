import { Model } from "mongoose";

interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  website?: string;
}

export interface IInstructor {
  name: string;
  email: string;
  bio?: string;
  profilePicture?: string;
  socialLinks?: SocialLinks;
}

export type instructorModel = Model<
  IInstructor,
  Record<string, unknown>,
  unknown
>;
