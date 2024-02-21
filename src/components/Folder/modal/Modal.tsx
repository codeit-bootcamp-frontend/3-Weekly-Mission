/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
// import Image from "next/image";
import * as S from "./ModalStyle";

type onCloseFunction = () => void;

declare global {
  interface Window {
    Kakao: any;
  }
}

export function AddModal({ onClose }: { onClose: onCloseFunction }) {
  const handleClose = () => {
    onClose();
  };

  const [select, Setselect] = useState<string | null>(null);
  const handelSelect = (link: string) => {
    Setselect(link);
  };

  return (
    <S.Modal>
      <S.ModalContainer>
        <S.ModalClose onClick={handleClose}>
          <img src={"/assets/Icons/close.png"} alt="모달 닫기 이미지" />
        </S.ModalClose>
        <S.FeatureWrapper>
          <h1>폴더에 추가</h1>
          <span>링크 주소</span>
        </S.FeatureWrapper>
        <S.FolderListBox>
          {["코딩 팁", "채용 사이트", "유용한 글", "나만의 장소"].map(
            (link, index) => (
              <S.FolderList key={index} onClick={() => handelSelect(link)}>
                <span>{link}</span> <S.LinkCount>7개 링크</S.LinkCount>
              </S.FolderList>
            )
          )}
        </S.FolderListBox>
        <S.ModalButton>
          <span>추가하기</span>
        </S.ModalButton>
      </S.ModalContainer>
    </S.Modal>
  );
}

export function SortAddModal({ onClose }: { onClose: onCloseFunction }) {
  const handleClose = () => {
    onClose();
  };

  return (
    <S.Modal>
      <S.ModalContainer>
        <S.ModalClose onClick={handleClose}>
          <img src={"/assets/Icons/close.png"} alt="모달 닫기 이미지" />
        </S.ModalClose>
        <S.Feature>폴더 추가</S.Feature>
        <S.ContentInput />
        <S.ModalButton>
          <span>추가하기</span>
        </S.ModalButton>
      </S.ModalContainer>
    </S.Modal>
  );
}

export function DeleteLinkModal({ onClose }: { onClose: onCloseFunction }) {
  const handleClose = () => {
    onClose();
  };

  return (
    <S.Modal>
      <S.ModalContainer>
        <S.ModalClose onClick={handleClose}>
          <img src={"/assets/Icons/close.png"} alt="모달 닫기 이미지" />
        </S.ModalClose>
        <S.FeatureWrapper>
          <h1>링크 삭제</h1>
          <span>https://www.hello.com</span>
        </S.FeatureWrapper>
        <S.ModalButton $ColorRed>
          <span>삭제하기</span>
        </S.ModalButton>
      </S.ModalContainer>
    </S.Modal>
  );
}

export function ChangeNameModal({ onClose }: { onClose: onCloseFunction }) {
  const handleClose = () => {
    onClose();
  };

  return (
    <S.Modal>
      <S.ModalContainer>
        <S.ModalClose onClick={handleClose}>
          <img src={"/assets/Icons/close.png"} alt="모달 닫기 이미지" />
        </S.ModalClose>
        <S.Feature>이름 변경하기</S.Feature>
        <S.ContentInput />
        <S.ModalButton>
          <span>변경하기</span>
        </S.ModalButton>
      </S.ModalContainer>
    </S.Modal>
  );
}

export function DeleteFolderModal({ onClose }: { onClose: onCloseFunction }) {
  const handleClose = () => {
    onClose();
  };

  return (
    <S.Modal>
      <S.ModalContainer>
        <S.ModalClose onClick={handleClose}>
          <img src={"/assets/Icons/close.png"} alt="모달 닫기 이미지" />
        </S.ModalClose>
        <S.FeatureWrapper>
          <h1>폴더 삭제</h1>
          <span>폴더명</span>
        </S.FeatureWrapper>
        <S.ModalButton $ColorRed>
          <span>삭제하기</span>
        </S.ModalButton>
      </S.ModalContainer>
    </S.Modal>
  );
}

export function ShareModal({ onClose }: { onClose: onCloseFunction }) {
  const handleClose = () => {
    onClose();
  };

  const host = window.location.host;
  const userId = 1;
  const folderId = 1;
  const shareUrl = `https://${host}/shared?user=${userId}&folder=${folderId}`;

  const shareKakao = () => {
    if (!window.Kakao || !window.Kakao.inInitialized()) {
      console.error("Error");
      return;
    }

    window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);

    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "Linkbrary",
        description: "세상의 모든 링크를 저장하세요.",
        imageUrl: "",
        link: {
          mobileWebUrl: shareUrl,
        },
      },
      buttons: [
        {
          title: "보러 가기",
          link: {
            mobileWebUrl: shareUrl,
          },
        },
      ],
    });
  };

  const shareFacebook = () => {
    window.open(`http://www.facebook.com/sharer/sharer.php?u=${shareUrl}`);
  };

  const copyLink = () => {
    navigator.clipboard
      .writeText(shareUrl)
      .then(() => alert("링크가 복사되었습니다."));
  };

  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);
    }
  }, []);

  return (
    <S.Modal>
      <S.ShareContainer>
        <S.ModalClose onClick={handleClose}>
          <img src={"/assets/Icons/close.png"} alt="모달 닫기 이미지" />
        </S.ModalClose>
        <S.FeatureWrapper>
          <h1>폴더 공유</h1>
          <span>폴더명</span>
        </S.FeatureWrapper>
        <S.FeatureLinkWrapper>
          <S.FeatureLink>
            <S.ShareImg $shareApi="kakao" onClick={shareKakao}>
              <img
                src={"/assets/Icons/kakao.svg"}
                alt="카카오톡 아이콘 이미지"
              />
            </S.ShareImg>
            <S.ShareText>카카오톡</S.ShareText>
          </S.FeatureLink>
          <S.FeatureLink>
            <S.ShareImg $shareApi="facebook" onClick={shareFacebook}>
              <img
                src={"/assets/Icons/facebook.svg"}
                alt="페이스북 아이콘 이미지"
              />
            </S.ShareImg>
            <S.ShareText>페이스북</S.ShareText>
          </S.FeatureLink>
          <S.FeatureLink>
            <S.ShareImg $shareApi="copyUrl" onClick={copyLink}>
              <img src={"/assets/Icons/link.svg"} alt="링크 아이콘 이미지" />
            </S.ShareImg>
            <S.ShareText>링크 복사</S.ShareText>
          </S.FeatureLink>
        </S.FeatureLinkWrapper>
      </S.ShareContainer>
    </S.Modal>
  );
}
