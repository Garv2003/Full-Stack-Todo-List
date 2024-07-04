import { NextRequest, NextResponse } from "next/server";
import User from "../../../../model/user";

export async function POST(req) {
  const formData = await req.json();
  const { username, password } = formData;
  const user = await User.findOne({ username: username });
  if (!user) {
    return NextResponse.error(new Error("User not found"), 404);
  }
  if (user.password !== password) {
    return NextResponse.error(new Error("Invalid password"), 401);
  }
  return NextResponse.json({ user: user });
}
