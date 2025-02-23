import { NextResponse } from "next/server";

let users: { email: string; password: string }[] = [];

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ error: "Add email and password" }, { status: 400 });
  }

  // בדיקה אם המשתמש כבר קיים
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return NextResponse.json({ error: "Email is already exist" }, { status: 400 });
  }

  // הוספת המשתמש
  users.push({ email, password });

  return NextResponse.json({ message: "You signed in" }, { status: 201 });
}