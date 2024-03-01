import { SignInputErrorMessages, URL_DOMAIN } from "@/constants/Constants";
import { signFormDataInterface } from "@/interfaces";
import postFetch from "@/utils/postFetch";
import { setAccessToken } from "@/utils/setAccessToken";
import { useRouter } from "next/router";
import { FormEvent } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

export const useAuthForm = (watch: any, setError: any) => {
    const router = useRouter();

    // 로그인 버튼 클릭
    const handleLoginSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const data: signFormDataInterface = {
                email: watch("email"),
                password: watch("password"),
            };
            const res = await postFetch(URL_DOMAIN, "api/sign-in", data);
            const result = res.data;
            if (result.accessToken) {
                setAccessToken(result.accessToken);
                router.push("/folder");
            }
        } catch (error) {
            console.error(error);
            setError("email", {
                message: SignInputErrorMessages.PleaseConfirmEmail,
            });
            setError("password", {
                message: SignInputErrorMessages.PleaseConfirmPassword,
            });
        }
    };

    // 회원가입 버튼 클릭
    const handleRegisterSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const data: signFormDataInterface = {
                email: watch("email"),
                password: watch("password"),
            };
            const res = await postFetch(URL_DOMAIN, "api/sign-up", data);
            const result = res.data;
            if (result.accessToken) {
                setAccessToken(result.accessToken);
                router.push("/folder");
            }
        } catch (error) {
            console.error(error);
            setError("email", {
                message: SignInputErrorMessages.PleaseConfirmEmail,
            });
            setError("password", {
                message: SignInputErrorMessages.PleaseConfirmPassword,
            });
        }
    };

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log("Form submitted.", data);
    };

    return { handleLoginSubmit, handleRegisterSubmit, onSubmit };
};
