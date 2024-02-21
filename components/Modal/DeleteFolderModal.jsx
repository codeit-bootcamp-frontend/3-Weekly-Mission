import ModalWithButton from "./molcules/ModalWithButton";

export default function DeleteFolderModal({folderName}) {

  return (
      <ModalWithButton
          header="폴더삭제"
          subHeader={folderName}
          buttonType="alert"
          buttonName="삭제하기"
          buttonAction={() => console.log("폴더삭제")}/>
  )
}
