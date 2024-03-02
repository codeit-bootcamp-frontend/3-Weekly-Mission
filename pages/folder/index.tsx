import styled from "styled-components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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
import { getRefinedFolderList } from "@/apis/services";

export default function Folder() {
    const router = useRouter();

    // 로그인이 되어있지 않다면 로그인 페이지로 이동한다.
    useEffect(() => {
        if (!getAccessToken()) {
            router.push("/signin");
        }
    }, []);

    const [folderList, setFolderList] = useState([]);

    // 폴더 리스트를 가져온다.
    useEffect(() => {
        (async () => {
            const refinedFolderList = await getRefinedFolderList();
            setFolderList(refinedFolderList);
        })();
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
                    folderList={folderList}
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
