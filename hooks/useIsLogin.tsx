import { getAccessToken } from "@/utils/getAccessToken";
import { useEffect, useState } from "react";

export const useIsLogin = () => {
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        if (getAccessToken()) {
            setIsLogin(true);
        }
    }, []);

    return { isLogin };
};
