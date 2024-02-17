import styled from "styled-components";

import CreateFolder from "./CreateFolder";
import ShareFolder from "./ShareFolder";
import ChangeFolderName from "./ChangeFolderName";
import DeleteFolder from "./DeleteFolder";
import UpdateFolder from "./UpdateFolder";
import DeleteLink from "./DeleteLink";
import { ModalInterface } from "../../interfaces";
import { CloseModal } from "../../types";

interface ModalProps {
    modal: ModalInterface;
    onCloseModalButtonClick: CloseModal;
}

const Modal = ({ modal, onCloseModalButtonClick }: ModalProps) => {
    switch (modal.type) {
        case "CreateFolder": {
            return (
                <ModalWrapper>
                    <CreateFolder
                        modal={modal}
                        onCloseModalButtonClick={onCloseModalButtonClick}
                    />
                </ModalWrapper>
            );
        }
        case "ShareFolder": {
            return (
                <ModalWrapper>
                    <ShareFolder
                        modal={modal}
                        onCloseModalButtonClick={onCloseModalButtonClick}
                    />
                </ModalWrapper>
            );
        }
        case "ChangeFolderName": {
            return (
                <ModalWrapper>
                    <ChangeFolderName
                        modal={modal}
                        onCloseModalButtonClick={onCloseModalButtonClick}
                    />
                </ModalWrapper>
            );
        }
        case "DeleteFolder": {
            return (
                <ModalWrapper>
                    <DeleteFolder
                        modal={modal}
                        onCloseModalButtonClick={onCloseModalButtonClick}
                    />
                </ModalWrapper>
            );
        }
        case "UpdateFolder": {
            return (
                <ModalWrapper>
                    <UpdateFolder
                        onCloseModalButtonClick={onCloseModalButtonClick}
                    />
                </ModalWrapper>
            );
        }
        case "DeleteLink": {
            return (
                <ModalWrapper>
                    <DeleteLink
                        modal={modal}
                        onCloseModalButtonClick={onCloseModalButtonClick}
                    />
                </ModalWrapper>
            );
        }
        default: {
            return null;
        }
    }
};

const ModalWrapper = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.08);
    position: absolute;
    top: 0;
    z-index: 9999;
`;

export default Modal;
