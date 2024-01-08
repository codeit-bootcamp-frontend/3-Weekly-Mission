import { useFolderData } from "../../hooks/useFolderData";
import "./Header.css";

function Header() {
  const { folderData, loadingError } = useFolderData();

  return (
    <header>
      <div className="folder-info">
        <img
          className="folder-owner-profile"
          src={folderData?.folder?.owner?.profileImageSource}
          alt="folder-owner-profile-img"
        />
        <span className="folder-owner-name">
          @{folderData?.folder?.owner?.name}
        </span>
        <span className="folder-name">{folderData?.folder?.name}</span>
        {loadingError?.message && <span>{loadingError.message}</span>}
      </div>
    </header>
  );
}

export default Header;
