"use client";

import { LoginForm } from "@/features/auth";

export default function Login() {
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="w-full max-w-md ">
        <LoginForm />
      </div>
    </div>
  );
}
