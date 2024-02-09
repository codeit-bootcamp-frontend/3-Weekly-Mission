import Profile from "../component/Header/Profile";
import Footer from "../component/Footer/Footer";
import LinkAdd from "../component/LinkAdd";
import FolderListBtn from "../component/folder/FolderListBtn";
import Search from "../component/CardSection/Search";

export default function FolderPage() {
  return (
    <>
      <Profile />
      <LinkAdd />
      <div className="mainArea">
        <div className="mainBox">
          {/* <FolderAtionBtn /> */}
          <Search />
          <FolderListBtn />
        </div>
      </div>
      <Footer />
    </>
  );
}
///api/users/1
///api/users/1/folders
///api/users/1/links?folderId={해당 폴더 ID}
//https://bootcamp-api.codeit.kr
