import { useSearchBar } from "@/hooks/useSearchBar";
import { useGetShareLinkList } from "@/hooks/Shared.hook";
import Header from "@/components/Header/Header";
import ShareDescription from "@/components/ShareDescription/ShareDescription";
import Contents from "@/components/Contents/Contents";
import CardSearchBar from "@/components/Contents/CardSearchBar/CardSearchBar";
import Footer from "@/components/Footer/Footer";
import CardList from "@/components/Contents/CardList/CardList";
import { useRouter } from "next/router";

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
            <ShareDescription />
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
