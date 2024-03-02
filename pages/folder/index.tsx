import styled from "styled-components";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "@/components/Header/Header";
import LinkCreator from "@/components/LinkCreator/LinkCreator";
import Contents from "@/components/Contents/Contents";
import CardSearchBar from "@/components/Contents/CardSearchBar/CardSearchBar";
import CardList from "@/components/Contents/CardList/CardList";
import Footer from "@/components/Footer/Footer";
import { useLinkList, useScrollingSearchBar } from "@/hooks/Folder.hook";
import { useSearchBar } from "@/hooks/useSearchBar";
import { getAccessToken } from "@/utils/getAccessToken";
import FolderList from "@/components/Contents/FolderList/FolderList";
import { Modals } from "@/components/Modal/Modals";

export default function Folder() {
    const router = useRouter();

    // 로그인이 되어있지 않다면 로그인 페이지로 이동한다.
    useEffect(() => {
        if (!getAccessToken()) {
            router.push("/signin");
        }
    }, []);

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
                linkCreatorDom={linkCreatorRefs.linkCreatorDom}
                linkCreatorWrapperDom={linkCreatorRefs.linkCreatorWrapperDom}
            />
            <Contents>
                <CardSearchBar
                    inputValue={inputValue}
                    onInputChange={handleInputChange}
                    resetInputValue={resetInputValue}
                />
                <FolderList
                    onOverviewFolderButtonClick={
                        handleOverviewFolderButtonClick
                    }
                    onFilteredFolderButtonClick={
                        handleFilteredFolderButtonClick
                    }
                />
                <CardList LinkList={LinkList} />
            </Contents>
            <Footer ref={footerDom} />
        </FolderPageWrapper>
    );
}

const FolderPageWrapper = styled.div`
    position: relative;
`;
