import { useEffect, useState } from "react";

export const usePasswordInput = (
    errors: any,
    onLoginSubmit: (e: React.FormEvent) => void
) => {
    const [isHidden, setIsHidden] = useState(true);
    const [isPasswordError, setIsPasswordError] = useState(false);

    useEffect(() => {
        if (errors.password?.message) {
            return setIsPasswordError(true);
        }
        if (!errors.password?.message) {
            return setIsPasswordError(false);
        }
    }, [errors.password]);

    const toggleHidden = () => {
        setIsHidden(!isHidden);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            onLoginSubmit(e);
        }
    };

    return { isHidden, isPasswordError, toggleHidden, handleKeyDown };
};
