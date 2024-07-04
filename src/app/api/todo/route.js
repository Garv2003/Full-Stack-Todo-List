import { NextResponse } from "next/server";
import { connectDB, disconnectDB } from "@/app/db/db";
import Todo from "../../../../model/todo";

export async function GET() {
  try {
    await connectDB();
    const todos = await Todo.find();
    return NextResponse.json({ todos: todos });
  } catch (err) {
    return NextResponse.error(new Error("Failed to fetch todos"), 400);
  } finally {
    await disconnectDB();
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const formData = await req.json();
    const todo = await Todo.create(formData);
    return NextResponse.json({ todo: todo });
  } catch (err) {
    return NextResponse.error(new Error("Failed to create todo"), 400);
  } finally {
    await disconnectDB();
  }
}
