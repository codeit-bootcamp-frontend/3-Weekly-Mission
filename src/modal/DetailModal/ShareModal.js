import React from "react";

const ShareModal = ({ folderId }) => {
  const copyClipBoard = () => {
    try {
      const clipURL = `${process.env.REACT_APP_COPY_DOMAIN_USERS}=${folderId}`;
      navigator.clipboard.writeText(clipURL);
      alert(`클립보드에 복사되었습니다. ${folderId}`);
      console.log(clipURL);
    } catch (error) {
      alert("클립보드 복사에 실패했습니다.");
    }
  };

  return (
    <div>
      <div className="share-title">
        <div>폴더 공유</div>
        <div className="share-sub">폴더명</div>
      </div>
      <div className="share-button-container">
        <button className="share-button">
          <div className="share-img">
            <img src="../../images/kakao.svg" alt="카카오 아이콘 이미지" />
          </div>
          <div>카카오톡</div>
        </button>
        <button className="share-button">
          <div className="share-img">
            <img src="../../images/facebook.svg" alt="페이스북 아이콘 이미지" />
          </div>
          <div>페이스북</div>
        </button>
        <button className="share-button" onClick={copyClipBoard}>
          <div className="share-img">
            <img src="../../images/link.svg" alt="링크 아이콘 이미지" />
          </div>
          <div>링크 복사</div>
        </button>
      </div>
    </div>
  );
};

export default ShareModal;
