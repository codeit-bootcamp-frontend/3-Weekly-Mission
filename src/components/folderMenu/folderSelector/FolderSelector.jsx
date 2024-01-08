import classNames from "classnames";
import style from "./FolderSelector.module.css";

function Folder({ folderInfo, onClick }) {
  const handleClick = () => onClick(folderInfo);
  return (
    <li key={folderInfo.id} onClick={handleClick}>
      {folderInfo.name}
    </li>
  );
}

function FolderSelector({ className, onClick, folders }) {
  return (
    <ul className={classNames(style.selectMenus, className)}>
      <li onClick={() => onClick("")}>전체</li>
      {folders &&
        folders.map((folder) => (
          <Folder key={folder.id} folderInfo={folder} onClick={onClick} />
        ))}
    </ul>
  );
}

export default FolderSelector;
