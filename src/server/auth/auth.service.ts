import { SALTROUND } from "@/env";
import { findByUserName } from "./auth.repository";
import * as bcrypt from "bcrypt";

export async function loginUser({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  const user = await findByUserName(username);

  if (!user) {
    throw new Error("User not found");
  }

  const isValid = await bcrypt.compare(password, user.passwordHash);


  if(!isValid){
    throw new Error("Invalid Credentails")
  }

  return user
}


