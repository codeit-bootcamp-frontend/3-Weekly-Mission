import ModalWithButton from "./molcules/ModalWithButton";

export default function EditFolderNameModal({folderName}) {

  return (
      <ModalWithButton
          header="폴더 이름 변경"
          useInput={true}
          inputDefault={folderName}
          buttonName="변경하기"
          buttonAction={() => console.log("update FolderName")}/>
  )
}
