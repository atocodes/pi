import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { LOGINTOKEN } from "./lib/constants";
import { prisma } from "./lib/prisma";
import { AccountRole } from "../generated/prisma/enums";
import * as bcrypt from "bcrypt";
import { SALTROUND } from "./env";

export async function proxy(request: NextRequest) {
  const token = request.cookies.get(LOGINTOKEN);
  // await createDevUser()
  // const path = request.url.substring(request.url.lastIndexOf("/"));
  const isAuthPage = request.nextUrl.pathname.startsWith("/login");
  if (!token && !isAuthPage) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};

async function createDevUser() {
  const user = await prisma.user.create({
    data: {
      fistName: "ATO",
      createdLocally: true,
      passwordHash: await bcrypt.hash("12345678", parseInt(SALTROUND!)),
      role: AccountRole.STAFF,
      username: "atocodes",
    },
  });
  console.log(user);
}
