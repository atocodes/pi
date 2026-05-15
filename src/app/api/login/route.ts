import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { LOGINTOKEN } from "@/lib/constants";
import { authService } from "@/server/auth";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { username, password } = body;

    if (!username || !password) {
      return NextResponse.json(
        {
          message: "Messing credentials",
        },
        { status: 400 },
      );
    }

    const user = await authService.loginUser({ username, password });

    await (await cookies()).set(LOGINTOKEN, user.id);

    return NextResponse.json({
      message: "Login successful",
      user,
    });
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { message: error ? `${error}` : "Error logggin in user" },
      { status: 500 },
    );
  }
}
