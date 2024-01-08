import SearchBar from "../SearchBar/SearchBar";
import CardList from "../CardList/CardList";
import FolderList from "../Folder/FolderList";
import "./Content.css";

function Content() {
  return (
    <div className="wrap">
      <div className="spacing">
        <SearchBar></SearchBar>
        <FolderList />
        <CardList></CardList>
      </div>
    </div>
  );
}

export default Content;
