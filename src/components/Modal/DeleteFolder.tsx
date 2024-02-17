import ModalTitle from "./ModalContent/ModalTitle";
import ModalCtaButton from "./ModalContent/ModalCtaButton";
import ModalContentWrapper from "./ModalContent/ModalContentWrapper.style";
import ModalTitleContainer from "./ModalContent/ModalTitleContainer.style";
import ModalCloseButton from "./ModalContent/ModalCloseButton";
import { ModalProps } from "../../interfaces";

const DeleteFolder = ({ modal, onCloseModalButtonClick }: ModalProps) => {
    if (modal === undefined) {
        return null;
    }
    const ModalCtaButtonBgColor = "#FF5B56";

    return (
        <ModalContentWrapper>
            <ModalTitleContainer>
                <ModalTitle text="폴더 삭제" detailText={modal.folderName} />
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

export default DeleteFolder;
