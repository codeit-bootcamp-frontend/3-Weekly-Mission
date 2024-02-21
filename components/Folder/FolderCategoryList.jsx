import FolderCategoryItem from "./FolderCategoryItem";
import * as S from "./FolderCategoryList.style";
import useModal from "@/hooks/useModal";

function FolderCategoryList({folderCategories}) {

  const categories = [{id: "all", name: "전체"}, ...folderCategories];
  const {openModal} = useModal();
  const openAddFolderModal = () => {
    openModal("AddFolder");
  }


  return (
      <S.CategoryWrapper>
        <S.CategoryContainer>
          {categories.map((folder) => (
              <FolderCategoryItem key={folder.id} data={folder}/>
          ))}
        </S.CategoryContainer>
        <img src="/icons/add-icon.svg" alt="add" className="add-icon"
             onClick={() => openAddFolderModal}/>
      </S.CategoryWrapper>
  )
}

export default FolderCategoryList;
