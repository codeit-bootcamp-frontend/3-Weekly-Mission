import {FolderContext} from "@/pages/folder";
import {useContext} from "react";
import * as S from "./FolderCategoryItem.style";

function FolderCategoryItem({data}) {

  const {setCurCategoryId, curCategoryId} = useContext(FolderContext)

  const handleClickEvent = () => {
    setCurCategoryId(data.id);
  }

  return (
      <S.CategoryButton onClick={handleClickEvent}
                        $isSelected={curCategoryId === data.id}>
        <p>{data.name}</p>
      </S.CategoryButton>
  );
}

export default FolderCategoryItem;
