import React, {createContext, useEffect, useState} from "react";
import FolderTop from "@/components/Folder/FolderTop";
import FolderContents from "@/components/Folder/FolderContents";
import * as S from "@/styles/Folder.style";
import {
  getLinksByCategoryId,
  getUserFolderCategories,
} from "@/utils/api";

export const FolderContext = createContext();

export default function Folder() {
  const [folderCategoryList, setFolderCategoryList] = React.useState([]);
  const [folderList, setFolderList] = useState([]);
  const [curCategoryId, setCurCategoryId] = useState("all");

  const loadUserFolderCategoryList = async () => {
    try {
      const folderCategoryList = await getUserFolderCategories();
      setFolderCategoryList(folderCategoryList);
    } catch (error) {
      console.error("error");
    }
  }

  const loadUserFoldersByCategoryId = async () => {
    try {
      const folders = await getLinksByCategoryId(curCategoryId);
      setFolderList(folders.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadUserFolderCategoryList();
  }, []);

  useEffect(() => {
    loadUserFoldersByCategoryId();
  }, [curCategoryId]);

  const data = {
    folderCategoryList,
    setFolderCategoryList,
    folderList,
    setFolderList,
    curCategoryId,
    setCurCategoryId,
    loadUserFoldersByCategoryId,
  };

  return (
      <>
        <S.FolderPage>
          <FolderContext.Provider value={data}>
            <FolderTop/>
            <FolderContents/>
          </FolderContext.Provider>
        </S.FolderPage>
      </>
  )
}
