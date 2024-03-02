import { useEffect, useState } from "react";

export const useEmailInput = (
    errors: any,
    onLoginSubmit: (e: React.FormEvent) => void
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
            onLoginSubmit(e);
        }
    };

    return { isError, handleKeyDown };
};
