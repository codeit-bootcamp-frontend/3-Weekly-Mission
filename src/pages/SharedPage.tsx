import ShareDescription from "../components/ShareDescription/ShareDescription";
import Contents from "../components/Contents/Contents";
import Search from "../components/Contents/CardSearchBar/CardSearchBar";
import CardList from "../components/Contents/CardList/CardList";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import {
    useGetSharedPageInfo,
    useGetSharedPageIds,
    useSharedPageLogin,
    useGetShareCardList,
    useGetFolderListData,
    useGetSharePageFolderName,
} from "./SharedPage.hook";
import { useSearchBar } from "../hooks/useSearchBar";

const SharedPage = () => {
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
                <Search
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
};

export default SharedPage;
