import React, {useEffect} from 'react';
import SharedTop from "../../components/Shared/Top";
import SharedContents from "../../components/Shared/SharedContents";
import {getFolderSampleList} from "../../utils/api";
import * as S from "../styles/Shared.style";

export default function Shared() {
  const [data, setData] = React.useState(null);
  const loadFolderList = async () => {
    try {
      const folderList = await getFolderSampleList();
      setData(folderList.folder);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadFolderList();
  }, []);

  return (
      <S.Shared>
        {data && <SharedTop data={data}/>}
        {data && <SharedContents data={data.links}/>}
      </S.Shared>
  );
}
