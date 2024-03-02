import styled from "styled-components";
import { useRouter } from "next/router";
import { useEffect } from "react";
import LinkCreator from "@/components/FolderPage/LinkCreator";
import { useLinkList, useScrollingSearchBar } from "@/hooks/Folder.hook";
import { useSearchBar } from "@/hooks/useSearchBar";
import { getAccessToken } from "@/utils/getAccessToken";
import Footer from "@/components/Common/Footer/Footer";
import Contents from "@/components/Common/Contents/Contents";
import CardSearchBar from "@/components/Common/Contents/CardSearchBar/CardSearchBar";
import FolderList from "@/components/Common/Contents/FolderList/FolderList";
import Header from "@/components/Common/Header/Header";
import CardList from "@/components/Common/Contents/CardList/CardList";

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
