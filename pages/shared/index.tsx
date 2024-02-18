import { useSearchBar } from "@/hooks/useSearchBar";
import {
    useGetFolderListData,
    useGetShareCardList,
    useGetSharePageFolderName,
    useGetSharedPageIds,
    useGetSharedPageInfo,
    useSharedPageLogin,
} from "@/hooks/Shared.hook";
import Header from "@/components/Header/Header";
import ShareDescription from "@/components/ShareDescription/ShareDescription";
import Contents from "@/components/Contents/Contents";
import CardSearchBar from "@/components/Contents/CardSearchBar/CardSearchBar";
import Footer from "@/components/Footer/Footer";
import CardList from "@/components/Contents/CardList/CardList";

export default function SharedPage() {
    const { login, userData } = useSharedPageLogin();
    const { sharedPageInfo } = useGetSharedPageInfo();
    const { sharedUserId, sharedFolderId } = useGetSharedPageIds();
    const { folderListData } = useGetFolderListData(
        sharedUserId,
        sharedFolderId
    );
    const { sharePageFolderName } = useGetSharePageFolderName(
        folderListData,
        sharedFolderId
    );
    const { cardListData, originalCardListData, setCardListData } =
        useGetShareCardList(sharedFolderId, sharedUserId);
    const { inputValue, handleInputChange, resetInputValue } = useSearchBar(
        originalCardListData,
        setCardListData
    );

    return (
        <>
            <Header login={login} userData={userData} />
            <ShareDescription
                sharedPageInfo={sharedPageInfo}
                sharePageFolderName={sharePageFolderName}
            />
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
