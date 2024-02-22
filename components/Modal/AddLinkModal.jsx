import ModalWithList from "./molcules/ModalWithList";

export default function AddLinkModal({modalList,link}) {

  return (
      <ModalWithList
          modalList={modalList}
          subHeader={link}
          header="폴더에 추가"
          buttonName="추가하기"
          buttonAction={() => console.log("링크를 폴더에 추가")}/>
  )
}
