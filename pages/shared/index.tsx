import { useSearchBar } from "@/hooks/useSearchBar";
import { useGetShareLinkList } from "@/hooks/Shared.hook";

import { useRouter } from "next/router";
import Header from "@/components/Common/Header/Header";
import Contents from "@/components/Common/Contents/Contents";
import CardSearchBar from "@/components/Common/Contents/CardSearchBar/CardSearchBar";
import CardList from "@/components/Common/Contents/CardList/CardList";
import Footer from "@/components/Common/Footer/Footer";
import Description from "@/components/SharedPage/Description";

export default function SharedFolderDetail() {
    const router = useRouter();
    const { folderId } = router.query;

    // 요구사항에 userId가 명확하지 않아 1007으로 고정
    const { LinkList, setLinkList, originalLinkList } = useGetShareLinkList(
        "1007",
        folderId
    );

    const { inputValue, handleInputChange, resetInputValue } = useSearchBar(
        originalLinkList,
        setLinkList
    );

    return (
        <>
            <Header currentPath="shared" />
            <Description />
            <Contents>
                <CardSearchBar
                    inputValue={inputValue}
                    onInputChange={handleInputChange}
                    resetInputValue={resetInputValue}
                />
                {/* @ts-ignore */}
                <CardList LinkList={LinkList} />
            </Contents>
            <Footer />
        </>
    );
}
