import { z } from "zod";
import { NextResponse } from "next/server";
import connectToDb from "../../../../../db";
import { User } from "../../../../../models/users";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const schema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6),
  })
  .required();

export async function POST(req) {
  try {
    connectToDb();
    const body = await req.json();
    const parsedBody = schema.parse(body);
    const user = await User.findOne({ email: parsedBody.email });

    if (!user) {
      return NextResponse.json({ message: "user not found" }, { status: 404 });
    }

    if (user) {
      const passwordMatch = await bcrypt.compare(
        parsedBody.password,
        user.password_hash
      );

      if (!passwordMatch) {
        return NextResponse.json(
          { message: "invalid password" },
          { status: 400 }
        );
      }
      const token = jwt.sign({ user: user._id }, process.env.JWT_SECRET);

      return NextResponse.json(
        { message: "user logged in successfully", token },
        { status: 200 }
      );
    }
  } catch (error) {
    console.log("Error", error);
    return NextResponse.json(error, {
      status: 400,
    });
  }
}
