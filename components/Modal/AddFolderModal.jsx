import ModalWithButton from "./molcules/ModalWithButton";

export default function AddFolderModal() {

  return (
      <ModalWithButton
          header="폴더 추가"
          useInput={true}
          buttonName="추가하기"
          buttonAction={() => console.log("폴더추가")}/>
  )
}
