"use client";
import { useEffect, useState } from "react";
import { loginUser } from "../service/auth.service";
import { User } from "@/features/profile/types";
import { useRouter } from "next/navigation";

export  function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const router = useRouter();

  const handleLogin = async (data: any) => {
    try {
      setLoading(true);
      const res = await loginUser(data);
      const user = await res.json();

      if (res.ok) {
        setUser(user);
        router.push("/");
      } else {
        setError(user.message);
      }
    } catch (error) {
      setError("Error signing in user");
    } finally {
      setLoading(false);
    }
  };

  

  return {
    loading,
    error,
    user,
    handleLogin,
  };
}
