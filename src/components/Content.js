import penIcon from "../assets/pen.svg";
import shareIcon from "../assets/share.svg";
import deleteIcon from "../assets/delete.svg";

import { getUserFolder, getFolderList } from "../api";
import useGetUserFolderAsync from "../hooks/useGetUserFolderAsync";
import useGetFolderListAsync from "../hooks/useGetFolderListAsync";
import Card from "./Card";
import { useState } from "react";
import "./Content.css";

export default function Content() {
  const [title, setTitle] = useState("전체");
  const [folderId, setFolderId] = useState(0);
  const data = useGetUserFolderAsync(getUserFolder);
  const folderList = useGetFolderListAsync(getFolderList);

  const handleClick = (title, id) => {
    setTitle(title);
    setFolderId(id);
  };

  let isNotEmpty = true;

  isNotEmpty = data?.some((data) => data.folder_id === folderId || !folderId);

  return (
    <section className="content">
      <div className="folder-title-container">
        <div>
          <button
            className={
              title === "전체" ? "folder-title selected" : "folder-title"
            }
            onClick={() => handleClick("전체", 0)}
          >
            전체
          </button>
          {folderList?.map((folder) => (
            <button
              className={
                title === folder.name ? "folder-title selected" : "folder-title"
              }
              key={folder.id}
              onClick={() => {
                handleClick(folder.name, folder.id);
              }}
            >
              {folder.name}
            </button>
          ))}
        </div>
        <button className="plus-btn">
          폴더추가
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.52151 2.46603C8.52151 2.17148 8.28272 1.9327 7.98817 1.9327C7.69362 1.9327 7.45484 2.17148 7.45484 2.46603L7.45484 7.96668L1.95425 7.96668C1.6597 7.96668 1.42092 8.20546 1.42092 8.50001C1.42092 8.79456 1.6597 9.03335 1.95425 9.03335L7.45484 9.03335L7.45484 14.534C7.45484 14.8285 7.69362 15.0673 7.98817 15.0673C8.28273 15.0673 8.52151 14.8285 8.52151 14.534L8.52151 9.03335L14.0222 9.03335C14.3168 9.03335 14.5555 8.79457 14.5555 8.50002C14.5555 8.20546 14.3167 7.96668 14.0222 7.96668L8.52151 7.96668L8.52151 2.46603Z"
              fill="#6D6AFE"
            />
          </svg>
        </button>
      </div>

      <div>
        <h2>{title}</h2>
        {title === "전체" || (
          <div>
            <span>
              <img src={shareIcon} alt="shareIcon"/>
            </span>
            <span>
              <img src={penIcon} alt="penIcon"/>
            </span>
            <span>
              <img src={deleteIcon} alt="deleteIcon"/>
            </span>
          </div>
        )}
      </div>
      <div className="card-container">
        {data?.map(
          (data) =>
            (data.folder_id === folderId || !folderId) && (
              <Card key={data?.id} data={data} />
            )
        )}
        {isNotEmpty || <div className="no-link">저장된 링크가 없습니다</div>}
      </div>
    </section>
  );
}
