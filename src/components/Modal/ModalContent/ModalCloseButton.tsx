import styled from "styled-components";
import modalClose from "../../../assets/images/_close.svg";
import { CloseModal } from "../../../types";

interface ModalCloseButtonProps {
    onCloseModalButtonClick: CloseModal;
}

const ModalCloseButton = ({
    onCloseModalButtonClick,
}: ModalCloseButtonProps) => {
    return (
        <StyledModalCloseButton type="button" onClick={onCloseModalButtonClick}>
            <img src={modalClose} alt="모달 닫기 버튼" />
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
