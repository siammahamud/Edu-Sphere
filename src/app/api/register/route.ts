import { User } from "@/model/user-model";
import dbConnect from "@/service/db-connect";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const { firstName, lastName, email, password, role } = await request.json();
    const hashPassword = await bcrypt.hash(password, 5);
    const newUser = {
      firstName,
      lastName,
      email,
      password: hashPassword,
      role,
    };

    await dbConnect();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists with this email" },
        { status: 400 }
      );
    }

    await User.create(newUser);
    return NextResponse.json(
      { message: "New user created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in POST /api/register:", error);
    return NextResponse.json(
      { message: error?.message || "Something went wrong" },
      { status: 500 }
    );
  }
};
