import { useEffect, useState } from "react";

export const useConfirmPasswordInput = (
    errors: any,
    onRegisterSubmit: (e: React.FormEvent) => void
) => {
    const [isHidden, setIsHidden] = useState(true);
    const [isConfirmPasswordError, setIsConfirmPasswordError] = useState(false);

    useEffect(() => {
        if (errors.confirmPassword?.message) {
            return setIsConfirmPasswordError(true);
        }

        if (!errors.confirmPassword?.message) {
            return setIsConfirmPasswordError(false);
        }
    }, [errors.confirmPassword]);

    const toggleHidden = () => {
        setIsHidden(!isHidden);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            onRegisterSubmit(e);
        }
    };

    return { isHidden, isConfirmPasswordError, toggleHidden, handleKeyDown };
};
