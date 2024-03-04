import { axiosInstance } from "@/api/axiosInstance";
import getSignIn from "@/api/getSignIn";
import { UserInterface } from "@/types/types";
import { ReactNode, createContext, useState } from "react";

interface USER_LOG {
  user: any;
  isPending: boolean;
  login: any;
  logout: any;
}

const initial: USER_LOG = {
  user: null,
  isPending: true,
  login: () => {},
  logout: () => {},
};

export const AuthContext = createContext(initial);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [values, setValues] = useState<{
    user: UserInterface | null;
    isPending: boolean;
  }>({
    user: null,
    isPending: true,
  });

  async function getMyUser() {
    setValues((prev) => ({ ...prev, isPending: true }));
    let nextUser: UserInterface;
    try {
      const response = await axiosInstance.get("/users");
      nextUser = response.data;
      setValues((prev) => ({
        ...prev,
        user: nextUser,
        isPending: false,
      }));
    } catch {
      return;
    }
  }

  async function login(email = "", password = "") {
    const { data } = await getSignIn(email, password);
    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("refreshToken", data.refreshToken);
    await getMyUser();
  }

  // ㄹ그아웃 유저 정보 삭제 -> 로그아웃 API??
  async function logout() {
    setValues((prev) => ({
      ...prev,
      user: null,
      isPending: false,
    }));
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }

  return (
    <AuthContext.Provider
      value={{ user: values.user, isPending: values.isPending, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
