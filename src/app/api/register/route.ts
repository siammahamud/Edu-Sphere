import { User } from "@/model/user-model";
import dbConnect from "@/service/db-connect";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { firstName, lastName, email, password, role } = await request.json();
  const hashPassword = await bcrypt.hash(password, 5);
  const newUser = {
    firstName,
    lastName,
    email,
    password: hashPassword,
    role,
  };

  try {
    await dbConnect();
    User.create(newUser);
    return new NextResponse("New user created successfuly", {
      status: 201,
    });
  } catch (error) {
    throw new NextResponse(error?.message, {
      status: 500,
    });
  }
};
