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
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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
        folderCardData,
        originalFolderCardData,
        setFolderCardData,
        handleOverviewFolderButtonClick,
        handleFilteredFolderButtonClick,
    } = useFolder();
    const { login, userData } = useFolderPageLogin();
    const { inputValue, handleInputChange, resetInputValue } = useSearchBar(
        originalFolderCardData,
        setFolderCardData
    );
    const { linkCreatorRefs, footerDom } = useScrollingSearchBar();

    return (
        <FolderPageWrapper>
            <Header currentPath="folder" userData={userData} />
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
                    folderList={folderList}
                    onOverviewFolderButtonClick={
                        handleOverviewFolderButtonClick
                    }
                    onFilteredFolderButtonClick={
                        handleFilteredFolderButtonClick
                    }
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
