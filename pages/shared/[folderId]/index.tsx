import { useSearchBar } from "@/hooks/useSearchBar";
import { useGetShareCardList } from "@/hooks/Shared.hook";
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

    const { cardListData, originalCardListData, setCardListData } =
        useGetShareCardList("1007", folderId);

    const { inputValue, handleInputChange, resetInputValue } = useSearchBar(
        originalCardListData,
        setCardListData
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
                <CardList cardListData={cardListData} />
            </Contents>
            <Footer />
        </>
    );
}
