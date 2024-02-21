import ModalTitle from "./ModalContent/ModalTitle";
import ModalInput from "./ModalContent/ModalInput";
import ModalCtaButton from "./ModalContent/ModalCtaButton";
import ModalContentWrapper from "./ModalContent/ModalContentWrapper.style";
import ModalInputContainer from "./ModalContent/ModalInputContainer.style";
import ModalCloseButton from "./ModalContent/ModalCloseButton";
import { ModalProps } from "../../interfaces";

const CreateFolder = ({ modal, onCloseModalButtonClick }: ModalProps) => {
    const ModalCtaButtonBgColor =
        "linear-gradient(91deg, #6D6AFE 0.12%, #6AE3FE 101.84%)";

    if (modal === undefined) {
        return null;
    }

    return (
        <ModalContentWrapper>
            <ModalTitle text="폴더 추가" />
            <ModalInputContainer>
                <ModalInput placeholder="내용 입력" modal={modal} />
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

export default CreateFolder;
