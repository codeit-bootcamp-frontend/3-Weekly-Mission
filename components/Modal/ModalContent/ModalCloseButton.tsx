import styled from "styled-components";
import { CloseModal } from "@/types";
import Image from "next/image";

interface ModalCloseButtonProps {
    onCloseModalButtonClick: CloseModal;
}

const ModalCloseButton = ({
    onCloseModalButtonClick,
}: ModalCloseButtonProps) => {
    return (
        <StyledModalCloseButton type="button" onClick={onCloseModalButtonClick}>
            <Image
                src="/images/_close.svg"
                alt="모달 닫기 버튼"
                width={24}
                height={24}
            />
        </StyledModalCloseButton>
    );
};

const StyledModalCloseButton = styled.button`
    width: 24px;
    height: 24px;
    position: absolute;
    top: 16px;
    right: 16px;

    &img {
        width: 100%;
        height: 100%;
    }
`;

export default ModalCloseButton;
