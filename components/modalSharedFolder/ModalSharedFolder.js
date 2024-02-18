import styled from 'styled-components';
import close from '@/public/close.png';
import kakao from '@/public/kakao.png';
import facebook from '@/public/facebook.png';
import link from '@/public/link.png';
import { useEffect } from 'react';
import { shareKakao } from '../../utils/Kakao/ShareKaKaoLink';
import copy from 'copy-to-clipboard';
import Image from 'next/image';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  cursor: default;

  div {
    background: white;
    padding: 32px 74px;
    border-radius: 15px;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 24px;

    .closeButton {
      width: 24px;
      height: 24px;
      position: absolute;
      top: 16px;
      right: 16px;
      cursor: pointer;
    }

    div {
      gap: 8px;
      padding: 0;

      h1 {
        color: #373740;
        font-size: 1.25rem;
      }

      p {
        color: #9fa6b2;
        font-size: 0.875rem;
      }
    }

    .iconArea {
      display: flex;
      flex-direction: row;
      gap: 32px;

      .oneIconArea {
        display: block;
        cursor: pointer;
      }
    }
  }
`;

const ModalSharedFolder = ({
  handleClose,
  name,
  buttonInfo,
  cardInfo,
  folderName,
  folderId,
}) => {
  const SHARING_URL = `https://weekly-mission-part2.vercel.app/shared?user=${buttonInfo[0]['user_id']}&folder=${folderId}`;
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  function shareFacebook() {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${SHARING_URL}`,
      '페이스북 공유하기',
      'width=600,height=800,location=no,status=no,scrollbars=yes',
    );
  }

  function copyToClipboard() {
    copy(SHARING_URL);
    alert(`${SHARING_URL}이 클립보드에 복사되었습니다.`);
  }
  return (
    <ModalContainer>
      <div>
        <div>
          <h1>폴더 공유</h1>
          <p>{name}</p>
        </div>

        <div className="iconArea">
          <div
            className="oneIconArea"
            onClick={() => shareKakao(SHARING_URL, folderName)}
          >
            <Image onClick={handleClose} src={kakao} alt="close" />
            <p>카카오톡</p>
          </div>
          <div className="oneIconArea" onClick={shareFacebook}>
            <Image onClick={handleClose} src={facebook} alt="close" />
            <p>페이스북</p>
          </div>
          <div className="oneIconArea" onClick={copyToClipboard}>
            <Image onClick={handleClose} src={link} alt="close" />
            <p>링크 복사</p>
          </div>
        </div>

        <Image
          className="closeButton"
          onClick={handleClose}
          src={close}
          alt="close"
        />
      </div>
    </ModalContainer>
  );
};

export default ModalSharedFolder;
