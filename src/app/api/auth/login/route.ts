import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ error: "Add email and password" }, { status: 400 });
  }

  const user = users.find((user) => user.email === email && user.password === password);
  if (!user) {
    return NextResponse.json({ error: "Wrong email or passward" }, { status: 401 });
  }

  return NextResponse.json({ message: "You have been connected", token: "fake-jwt-token" }, { status: 200 });
}