import { ChangeEvent, useEffect, useState } from "react";
import { CardInterface } from "../interfaces";

// 서치바의 input을 관리하는 훅
export const useSearchBar = (originalFolderCardData: any, setCardList: any) => {
    // 문자열이 들어올 것이 명확하므로 타입을 주지 않는다
    const [inputValue, setInputValue] = useState("");

    // 이벤트 핸들러의 경우 HTML 이벤트 타입과 마찬가지로 ChangeEvent, MouseEvent 같이 -Event로 끝나는 타입을 사용합니다.
    // 제네릭으로 DOM 노드 타입을 지정해 주면 이벤트 타겟의 타입을 지정할 수 있습니다.
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const resetInputValue = () => {
        setInputValue("");
    };

    useEffect(() => {
        const filteredCardList = originalFolderCardData.current.filter(
            (card: CardInterface) => {
                if (
                    card.title !== null &&
                    card.url !== null &&
                    card.description !== null
                ) {
                    return (
                        card.title
                            .toLowerCase()
                            .includes(inputValue.toLowerCase()) ||
                        card.url
                            .toLowerCase()
                            .includes(inputValue.toLowerCase()) ||
                        card.description
                            .toLowerCase()
                            .includes(inputValue.toLowerCase())
                    );
                }
                return null;
            }
        );
        setCardList([...filteredCardList]);

        return () => {
            setCardList([...originalFolderCardData.current]);
        };
    }, [inputValue]);

    return { inputValue, handleInputChange, resetInputValue };
};
