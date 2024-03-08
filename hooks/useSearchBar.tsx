import { ChangeEvent, useEffect, useState } from "react";
import { CardInterface } from "../interfaces";

// 서치바의 input을 관리하는 훅
export const useSearchBar = (originalFolderCardData: any, setCardList: any) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const resetInputValue = () => {
        setInputValue("");
    };

    useEffect(() => {
        const filteredCardList = originalFolderCardData.current.filter(
            (card: CardInterface) => {
                if (card.title && card.url && card.description) {
                    const lowerCaseInputValue = inputValue.toLowerCase();
                    return (
                        card.title
                            .toLowerCase()
                            .includes(lowerCaseInputValue) ||
                        card.url.toLowerCase().includes(lowerCaseInputValue) ||
                        card.description
                            .toLowerCase()
                            .includes(lowerCaseInputValue)
                    );
                }
                return false;
            }
        );
        setCardList([...filteredCardList]);

        return () => {
            setCardList([...originalFolderCardData.current]);
        };
    }, [inputValue]);

    return { inputValue, handleInputChange, resetInputValue };
};
