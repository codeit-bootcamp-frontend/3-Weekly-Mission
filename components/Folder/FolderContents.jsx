import SearchArea from "../Forms/SearchArea";
import FolderCategoryList from "./FolderCategoryList";
import {useContext} from "react";
import {FolderContext} from "@/pages/folder";
import FolderContainer from "./FolderContainer";

function FolderContents() {

  const {folderCategoryList} = useContext(FolderContext)  //TODO
  const folderCategories = folderCategoryList.data || [];


  return (
      <div className="folder-top">
        <SearchArea/>
        <FolderCategoryList folderCategories = {folderCategories}/>
        <FolderContainer folderCategories = {folderCategories}/>
      </div>
  )
}

export default FolderContents;
