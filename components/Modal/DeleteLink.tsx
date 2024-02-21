import ModalTitle from "./ModalContent/ModalTitle";
import ModalCtaButton from "./ModalContent/ModalCtaButton";
import ModalContentWrapper from "./ModalContent/ModalContentWrapper.style";
import ModalTitleContainer from "./ModalContent/ModalTitleContainer.style";
import ModalCloseButton from "./ModalContent/ModalCloseButton";
import { ModalProps } from "../../interfaces";

const DeleteLink = ({ modal, onCloseModalButtonClick }: ModalProps) => {
    const ModalCtaButtonBgColor = "#FF5B56";

    if (modal === undefined) {
        return null;
    }
    return (
        <ModalContentWrapper>
            <ModalTitleContainer>
                <ModalTitle text="링크 삭제" detailText={modal.url} />
                <ModalCtaButton
                    text="삭제하기"
                    bgColor={ModalCtaButtonBgColor}
                />
            </ModalTitleContainer>
            <ModalCloseButton
                onCloseModalButtonClick={onCloseModalButtonClick}
            />
        </ModalContentWrapper>
    );
};

export default DeleteLink;
