import Modal from "./molcules/Modal";
import shareKakaoIcon from '../../assets/icons/share-kakao-icon.png';
import shareLinkIcon from '../../assets/icons/share-link-icon.png';
import shareFacebookIcon from '../../assets/icons/share-facebook-icon.png';
import * as S from './SharedModal.style';

const shareOptions = [
  {
    name: "카카오톡",
    icon: shareKakaoIcon,
    action: () => {
      console.log("카카오톡 공유")
    }
  },
  {
    name: "페이스북",
    icon: shareFacebookIcon,
    action: () => {
      console.log("페이스북 공유")
    }
  },
  {
    name: "링크 복사",
    icon: shareLinkIcon,
    action: () => {
      console.log("링크 복사")
    }
  }
]


export default function ShareModal({folderName}) {

  return (
      <Modal modalHeader="폴더 공유" subHeader={folderName}>
        <S.Wrapper>
          {shareOptions.map((option, index) => {
            return (
                <button key={index} onClick={option.action}>
                  <img src={option.icon} alt="icon"/>
                  <p>{option.name}</p>
                </button>
            )
          })}
        </S.Wrapper>
      </Modal>
  );
}
