import useGetFolderList from "../../hooks/useGetFolderList";
import modalCloseIcon from "@/public/modal_close_icon.svg";
import styles from "./Modal.module.css";
import Image from "next/image";
import { createPortal } from "react-dom";
import ShareModal from "./ShareModal";
import NameChangeModal from "./NameChangeModal";
import AddFolderModal from "./AddFolderModal";
import AddLinkModal from "./AddLinkModal";
import FolderDeleteModal from "./FolderDeleteModal";
import LinkDeleteModal from "./LinkDeleteModal";

export default function Modal({ state, onClick, link }: any) {
  const folderList = useGetFolderList();

  if (typeof window === "undefined") return <></>;

  const cancelModal = (e: any) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    onClick();
  };

  // 호스트주소/shared?user={현재 로그인 중인 유저ID}&folder={현재 열려있는 폴더ID}
  // const shareKakao = (route, title) => { // url이 id값에 따라 변경되기 때문에 route를 인자값으로 받아줌
  //   if (window.Kakao) {
  //     const kakao = window.Kakao;
  //     if (!kakao.isInitialized()) {
  //       kakao.init(process.env.REACT_APP_SHARE_KAKAO_LINK_KEY); // 카카오에서 제공받은 javascript key를 넣어줌 -> .env파일에서 호출시킴
  //     }

  //     kakao.Link.sendDefault({
  //       objectType: "feed", // 카카오 링크 공유 여러 type들 중 feed라는 타입 -> 자세한 건 카카오에서 확인
  //       content: {
  //         title: title, // 인자값으로 받은 title
  //         description: "설명", // 인자값으로 받은 title
  //         imageUrl: "이미지 url",
  //         link: {
  //           mobileWebUrl: route, // 인자값으로 받은 route(uri 형태)
  //           webUrl: route
  //         }
  //       },
  //       buttons: [
  //         {
  //           title: "title",
  //           link: {
  //             mobileWebUrl: route,
  //             webUrl: route
  //           }
  //         }
  //       ]
  //     });
  //   }
  // };
  // const handleCopyClipBoard = () => {
  //   navigator.clipboard.writeText(currentUrl);
  //   alert("클립보드에 복사되었습니다.");
  // };

  // const handleFacebookShare = () => {
  //   window.open(
  //     `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`,
  //     "페이스북 공유하기",
  //     "width=400,height=400,location=no,status=no,scrollbars=yes"
  //   );
  // };

  // const handleKakaotalkShare = () => {};
  // useEffect(() => {
  //   document.addEventListener("keydown", (e) => {
  //     if (e.key === "Escape") cancelModal(e);
  //   });
  // });

  return createPortal(
    <>
      {state["state"] && (
        <>
          <div className={styles["modal-background"]} onClick={cancelModal} />
          <div className={styles["modal-container"]}>
            <button className={styles["modal-close-btn"]} onClick={cancelModal}>
              <Image
                className={styles["modal-close-icon"]}
                src={modalCloseIcon}
                alt="modal-close-Image"
              />
            </button>
            {(state["target"] === "공유" && <ShareModal state={state} />) ||
              (state["target"] === "이름 변경" && (
                <NameChangeModal state={state} />
              )) ||
              (state["target"] === "삭제" && (
                <FolderDeleteModal state={state} />
              )) ||
              (state["target"] === "폴더추가" && (
                <AddFolderModal state={state} />
              )) ||
              (state["target"] === "삭제하기" && (
                <LinkDeleteModal state={state} />
              )) ||
              ((state["target"] === "폴더에 추가" || "추가하기") && (
                <AddLinkModal state={state} data={folderList} link={link} />
              ))}
          </div>
        </>
      )}
    </>,
    document.body
  );
}
