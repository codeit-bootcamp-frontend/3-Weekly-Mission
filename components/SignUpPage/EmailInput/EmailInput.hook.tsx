import { SignInputErrorMessages, URL_DOMAIN } from "@/constants/constants";
import { useEffect, useState } from "react";

export const useEmailInput = (
    errors: any,
    onRegisterSubmit: (e: React.FormEvent) => void,
    watch: any,
    setError: any
) => {
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (errors?.email?.message) {
            setIsError(true);
        }
        if (!errors?.email?.message) {
            setIsError(false);
        }
    }, [errors.email]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            onRegisterSubmit(e);
        }
    };

    const checkEmail = () => {
        (async () => {
            try {
                const data = {
                    email: watch("email"),
                };
                const res = await fetch(
                    `https://${URL_DOMAIN}/api/check-email`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(data),
                    }
                );
                if (res.ok) {
                    const result = await res.json();
                    setIsError(false);
                    return setError("email", {
                        message: SignInputErrorMessages.NoError,
                    });
                }
                if (res.status === 409) {
                    setIsError(true);
                    return setError("email", {
                        message: SignInputErrorMessages.DuplicateEmail,
                    });
                }

                if (res.status === 400) {
                    setIsError(true);
                    return setError("email", {
                        message: SignInputErrorMessages.NotValidEmail,
                    });
                }
                throw new Error("알수 없는 에러");
            } catch (error) {
                console.error(error);
            }
        })();
    };
    return { isError, handleKeyDown, checkEmail };
};
