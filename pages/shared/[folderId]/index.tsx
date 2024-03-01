import { useSearchBar } from "@/hooks/useSearchBar";
import { useGetShareCardList, useSharedPageLogin } from "@/hooks/Shared.hook";
import Header from "@/components/Header/Header";
import ShareDescription from "@/components/ShareDescription/ShareDescription";
import Contents from "@/components/Contents/Contents";
import CardSearchBar from "@/components/Contents/CardSearchBar/CardSearchBar";
import Footer from "@/components/Footer/Footer";
import CardList from "@/components/Contents/CardList/CardList";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getAccessToken } from "@/utils/getAccessToken";

export default function SharedFolderDetail() {
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        if (getAccessToken()) {
            setIsLogin(true);
        }
    }, []);

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
            <Header isLogin={isLogin} />
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
