/* eslint-disable react-hooks/exhaustive-deps */
import { AuthContext } from "@/contexts/authProvider";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

export default function useAuth(required = false) {
  const context = useContext(AuthContext);
  const router = useRouter();
  if (!context) {
    throw new Error("AuthProvider 안에서 사용해야 합니다");
  }

  useEffect(() => {
    if (
      router.route !== "/signup" &&
      !context.user &&
      required &&
      !context.isPending
    ) {
      router.push("/signin");
      return;
    }
  }, [context.user, context.isPending, required]);

  return context;
}
