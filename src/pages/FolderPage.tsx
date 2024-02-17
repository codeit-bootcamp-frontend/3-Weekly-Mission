import Profile from "../component/Header/Profile";
import Footer from "../component/Footer/Footer";
import LinkAdd from "../component/Header/LinkAdd";
import FolderListBtn from "../component/folder/FolderListBtn";
import Search from "../component/CardSection/Search";

export default function FolderPage() {
  return (
    <>
      <Profile />
      <LinkAdd />
      <div className="mainArea">
        <div className="mainBox">
          <Search />
          <FolderListBtn />
        </div>
      </div>
      <Footer />
    </>
  );
}
