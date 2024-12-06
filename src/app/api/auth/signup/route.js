import connectToDb from "../../../../../db";
import { z } from "zod";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { User } from "../../../../../models/users";
import jwt from "jsonwebtoken";

const schema = z
  .object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6),
  })
  .required();

export async function POST(req) {
  try {
    connectToDb();
    const body = await req.json();
    const parsedBody = schema.parse(body);

    const userExists = await User.findOne({ email: parsedBody.email });

    if (userExists) {
      return NextResponse.json(
        { message: "user already exists with this email" },
        { status: 400 }
      );
    }

    const hasedPassword = await bcrypt.hash(parsedBody.password, 10);
    const user = await User.create({
      name: parsedBody.name,
      email: parsedBody.email,
      password_hash: hasedPassword,
    });

    if (!user) {
      return NextResponse.json(
        { message: "user not created" },
        { status: 400 }
      );
    }

    const token = jwt.sign({ user: user._id }, process.env.JWT_SECRET);

    return NextResponse.json(
      { message: "user created successfully", token },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error connecting to database", error);
    return NextResponse.json(error, {
      status: 400,
    });
  }
}
