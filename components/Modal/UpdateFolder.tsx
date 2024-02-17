import ModalTitle from "./ModalContent/ModalTitle";
import ModalCtaButton from "./ModalContent/ModalCtaButton";
import ModalContentWrapper from "./ModalContent/ModalContentWrapper.style";
import ModalTitleContainer from "./ModalContent/ModalTitleContainer.style";
import ModalInputContainer from "./ModalContent/ModalInputContainer.style";
import ModalCloseButton from "./ModalContent/ModalCloseButton";
import ModalUpdateFolderCollection from "./ModalContent/ModalUpdateFolderCollection";
import { ModalProps } from "../../interfaces";

const UpdateFolder = ({ onCloseModalButtonClick }: ModalProps) => {
    const ModalCtaButtonBgColor =
        "linear-gradient(91deg, #6D6AFE 0.12%, #6AE3FE 101.84%)";

    return (
        <ModalContentWrapper>
            <ModalTitleContainer>
                <ModalTitle text="폴더에 추가" detailText="링크 주소" />
            </ModalTitleContainer>
            <ModalUpdateFolderCollection />
            <ModalInputContainer>
                <ModalCtaButton
                    text="추가하기"
                    bgColor={ModalCtaButtonBgColor}
                />
            </ModalInputContainer>
            <ModalCloseButton
                onCloseModalButtonClick={onCloseModalButtonClick}
            />
        </ModalContentWrapper>
    );
};

export default UpdateFolder;
