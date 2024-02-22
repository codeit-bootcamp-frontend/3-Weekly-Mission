import ModalWithButton from "./molcules/ModalWithButton";

export default function DeleteLinkModal({link}) {

  return (
      <ModalWithButton
          header="링크 삭제"
          subHeader={link}
          buttonType="alert"
          buttonName="삭제하기"
          buttonAction={() => console.log("링크삭제")}/>
  )
}
