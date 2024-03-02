import styled from "styled-components";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "@/components/Header/Header";
import LinkCreator from "@/components/LinkCreator/LinkCreator";
import Contents from "@/components/Contents/Contents";
import CardSearchBar from "@/components/Contents/CardSearchBar/CardSearchBar";
import FolderCollection from "@/components/Contents/FolderCollection/FolderCollection";
import CardList from "@/components/Contents/CardList/CardList";
import Footer from "@/components/Footer/Footer";
import Modal from "@/components/Modal/Modal";
import {
    useLinkList,
    useModal,
    useScrollingSearchBar,
} from "@/hooks/Folder.hook";
import { useSearchBar } from "@/hooks/useSearchBar";
import { getAccessToken } from "@/utils/getAccessToken";

export default function Folder() {
    const router = useRouter();

    useEffect(() => {
        if (!getAccessToken()) {
            router.push("/signin");
        }
    }, []);

    const { modal, showModal, closeModal } = useModal();
    const {
        LinkList,
        originalLinkList,
        handleOverviewFolderButtonClick,
        handleFilteredFolderButtonClick,
        setLinkList,
    } = useLinkList();
    const { inputValue, handleInputChange, resetInputValue } = useSearchBar(
        originalLinkList,
        setLinkList
    );
    const { linkCreatorRefs, footerDom } = useScrollingSearchBar();

    return (
        <FolderPageWrapper>
            <Header currentPath="folder" />
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
                    onOverviewFolderButtonClick={
                        handleOverviewFolderButtonClick
                    }
                    onFilteredFolderButtonClick={
                        handleFilteredFolderButtonClick
                    }
                />
                <CardList LinkList={LinkList} onDeleteButtonClick={showModal} />
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
