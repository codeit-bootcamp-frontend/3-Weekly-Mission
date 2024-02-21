import React, {useContext} from "react";
import FolderItem from "./FolderItem";
import {FolderContext} from "@/pages/folder";
import OptionBar from "../Folder/OptionBar";

const FolderContainer = ({folder, folderCategories}) => {
  const {folderList, curCategoryId} = useContext(FolderContext);
  const folders = folderList || [];

  //find folder name in the folderList
  const selectedCat = folderCategories.find(
      (category) => category.id === curCategoryId);
  const folderName = selectedCat?.name;

  return (
      <>
        <div className="container-header">
          <h2>{folderName ?? "전체"} </h2>
          {folderName && <OptionBar/>}
        </div>
        {folders.length === 0 ?
            <div>폴더가 없습니다.</div> :

            <div className="folder-item-container">
              {folders.map((item) => (
                  <FolderItem key={item.id} item={item}/>
              ))}
            </div>
        }
      </>
  )
}
export default FolderContainer;
