import styled from 'styled-components';
import useGetKakaoSdkScript from '../../hooks/useGetKakaoSdkScript';

import ModalTitle from './ModalContent/ModalTitle';
import ModalContentWrapper from './ModalContent/ModalContentWrapper';
import ModalTitleContainer from './ModalContent/ModalTitleContainer';
import ModalCloseButton from './ModalContent/ModalCloseButton';

import modalKakao from '../../assets/images/modal_kakao.svg';
import modalFacebook from '../../assets/images/modal_facebook.svg';
import modalLink from '../../assets/images/modal_link.svg';

import { copySharingLinkToClipBoard } from '../../utils/copySharingLinkToClipBoard';
import shareToFacebook from '../../utils/shareToFacebook';
import shareToKakao from '../../utils/shareToKakao';

const ShareFolder = ({ modal, onCloseModalButtonClick }) => {
  const { folderName, sharingUrl } = modal;
  // useGetKakaoSdkScript 훅으로 카카오 SDK 스크립트를 불러온다
  const { kakaoSdk } = useGetKakaoSdkScript();

  return (
    <ModalContentWrapper>
      <ModalTitleContainer>
        <ModalTitle text="폴더 공유" detailText={folderName} />
      </ModalTitleContainer>
      <ShareButtonWrapper>
        <ShareButton
          type="button"
          onClick={() => {
            shareToKakao(kakaoSdk, modal);
          }}
        >
          <ShareButtonImgWrapper bgColor="#FEE500">
            <img src={modalKakao} alt="모달 카카오 버튼" />
          </ShareButtonImgWrapper>
          <span>카카오톡</span>
        </ShareButton>
        <ShareButton
          type="button"
          onClick={() => {
            return shareToFacebook(sharingUrl);
          }}
        >
          <ShareButtonImgWrapper bgColor="#1877F2">
            <img src={modalFacebook} alt="모달 페이스북 버튼" />
          </ShareButtonImgWrapper>
          <span>페이스북</span>
        </ShareButton>
        <ShareButton
          type="button"
          onClick={() => {
            return copySharingLinkToClipBoard(sharingUrl);
          }}
        >
          <ShareButtonImgWrapper bgColor="rgba(157, 157, 157, 0.04)">
            <img src={modalLink} alt="모달 링크 버튼" />
          </ShareButtonImgWrapper>
          <span>링크 복사</span>
        </ShareButton>
      </ShareButtonWrapper>
      <ModalCloseButton onCloseModalButtonClick={onCloseModalButtonClick} />
    </ModalContentWrapper>
  );
};

const ShareButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 32px;
`;

const ShareButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  span {
    color: var(--Linkbrary-gray100, #373740);
    text-align: center;
    font-family: Inter;
    font-size: 13px;
    font-weight: 400;
    line-height: 15px; /* 115.385% */
  }
`;

const ShareButtonImgWrapper = styled.div`
  box-sizing: border-box;
  width: 42px;
  height: 42px;
  padding: 12px;
  border-radius: 37.333px;
  background: ${(props) => props.bgColor};

  img {
    width: 18px;
    height: 18px;
  }
`;

export default ShareFolder;
