import Header from "@/components/Header/Header";
import styled from "styled-components";
import {
    useFolder,
    useFolderPageLogin,
    useModal,
    useScrollingSearchBar,
} from "@/hooks/Folder.hook";
import { useSearchBar } from "@/hooks/useSearchBar";
import LinkCreator from "@/components/LinkCreator/LinkCreator";
import Contents from "@/components/Contents/Contents";
import CardSearchBar from "@/components/Contents/CardSearchBar/CardSearchBar";
import FolderCollection from "@/components/Contents/FolderCollection/FolderCollection";
import CardList from "@/components/Contents/CardList/CardList";
import Footer from "@/components/Footer/Footer";
import Modal from "@/components/Modal/Modal";

export default function Folder() {
    const { modal, showModal, closeModal } = useModal();
    const {
        folderData,
        folderCardData,
        originalFolderCardData,
        setFolderCardData,
        handleOverviewCardButtonClick,
        handleFilteredCardButtonClick,
    } = useFolder();
    const { login, userData } = useFolderPageLogin();
    const { inputValue, handleInputChange, resetInputValue } = useSearchBar(
        originalFolderCardData,
        setFolderCardData
    );
    const { linkCreatorRefs, footerDom } = useScrollingSearchBar();

    return (
        <FolderPageWrapper>
            <Header login={login} userData={userData} />
            <LinkCreator
                onUpdateButtonClick={showModal}
                linkCreatorDom={linkCreatorRefs.linkCreatorDom}
                linkCreatorWrapperDom={linkCreatorRefs.linkCreatorWrapperDom}
            />
            <Contents>
                <CardSearchBar
                    inputValue={inputValue}
                    onInputChange={handleInputChange}
                    resetInputValue={resetInputValue}
                />
                <FolderCollection
                    onButtonClick={showModal}
                    userData={userData}
                    folderData={folderData}
                    onOverviewCardButtonClick={handleOverviewCardButtonClick}
                    onFilteredCardButtonClick={handleFilteredCardButtonClick}
                />
                <CardList
                    cardListData={folderCardData}
                    onDeleteButtonClick={showModal}
                />
            </Contents>
            <Footer ref={footerDom} />
            {modal.type ? (
                <Modal modal={modal} onCloseModalButtonClick={closeModal} />
            ) : null}
        </FolderPageWrapper>
    );
}

const FolderPageWrapper = styled.div`
    position: relative;
`;
