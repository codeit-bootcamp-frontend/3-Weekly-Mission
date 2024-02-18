import useGetFolderListAsync from "../hooks/useGetFolderListAsync";
import modalCloseIcon from "../public/modal_close_icon.svg";
import kakao from "../public/kakao_share.svg";
import facebook from "../public/facebook_share.svg";
import linkIcon from "../public/link.svg";
import styles from "./Modal.module.css";
import { useEffect } from "react";
import Image from "next/image";

export default function Modal({ state, onClick, link }) {
  const folderList = useGetFolderListAsync();

  const cancelModal = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    onClick();
  };

  // const currentUrl = location.href;

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
  const handleCopyClipBoard = () => {
    navigator.clipboard.writeText(currentUrl);
    alert("클립보드에 복사되었습니다.");
  };

  const handleFacebookShare = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`,
      "페이스북 공유하기",
      "width=400,height=400,location=no,status=no,scrollbars=yes"
    );
  };

  const handleKakaotalkShare = () => {};
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") cancelModal();
    });
  });

  return (
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
            {(state["target"] === "공유" && (
              <>
                <h2
                  className={`${styles["modal-title"]} ${styles["having-folder-and-link"]}`}
                >
                  폴더 공유
                </h2>
                <h3 className={styles["link-and-folder-name"]}>
                  {state["folderName"]}
                </h3>
                <div className={styles["share-icon-wrapper"]}>
                  <button
                    className={styles["share-icon-btn"]}
                    onClick={handleKakaotalkShare}
                  >
                    <div
                      className={`${styles["img-container"]} ${styles["kakao"]}`}
                    >
                      <Image
                        className={`${styles["share-icon"]}`}
                        src={kakao}
                        alt="kakao-icon"
                      />
                    </div>
                    <span className={styles["share-icon-name"]}>카카오톡</span>
                  </button>
                  <button
                    className={styles["share-icon-btn"]}
                    onClick={handleFacebookShare}
                  >
                    <div
                      className={`${styles["img-container"]} ${styles["facebook"]}`}
                    >
                      <Image
                        className={`${styles["share-icon"]}`}
                        src={facebook}
                        alt="facebook-icon"
                      />
                    </div>
                    <span className={styles["share-icon-name"]}>페이스북</span>
                  </button>
                  <button
                    className={styles["share-icon-btn"]}
                    onClick={handleCopyClipBoard}
                  >
                    <div
                      className={`${styles["img-container"]} ${styles["link-icon"]}`}
                    >
                      <Image
                        className={`${styles["share-icon"]}`}
                        src={linkIcon}
                        alt="link-icon"
                      />
                    </div>
                    <span className={styles["share-icon-name"]}>링크 복사</span>
                  </button>
                </div>
              </>
            )) ||
              (state["target"] === "이름 변경" && (
                <>
                  <h2 className={styles["modal-title"]}>폴더 이름 변경</h2>
                  <input
                    className={styles["modal-input"]}
                    placeholder={state["folderName"]}
                  />
                  <button className={styles["modal-submit-btn"]}>
                    변경하기
                  </button>
                </>
              )) ||
              (state["target"] === "삭제" && (
                <>
                  <h2
                    className={`${styles["modal-title"]} ${styles["having-folder-and-link"]}`}
                  >
                    폴더 삭제
                  </h2>
                  <h3 className={styles["link-and-folder-name"]}>
                    {state["folderName"]}
                  </h3>
                  <button
                    className={`${styles["modal-submit-btn"]} ${styles["modal-delete-btn"]}`}
                  >
                    삭제하기
                  </button>
                </>
              )) ||
              (state["target"] === "폴더추가" && (
                <>
                  <h2 className={styles["modal-title"]}>폴더 추가</h2>
                  <input className={styles["modal-input"]} />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    className={styles["modal-submit-btn"]}
                  >
                    추가하기
                  </button>
                </>
              )) ||
              (state["target"] === "삭제하기" && (
                <>
                  <h2
                    className={`${styles["modal-title"]} ${styles["having-folder-and-link"]}`}
                  >
                    링크 삭제
                  </h2>
                  <h3 className={styles["link-and-folder-name"]}>
                    {state["url"]}
                  </h3>
                  <button
                    className={`${styles["modal-submit-btn"]} ${styles["modal-delete-btn"]}`}
                  >
                    삭제하기
                  </button>
                </>
              )) ||
              ((state["target"] === "폴더에 추가" || "추가하기") && (
                <>
                  <h2
                    className={`${styles["modal-title"]} ${styles["having-folder-and-link"]}`}
                  >
                    폴더에 추가
                  </h2>
                  <h3 className={styles["link-and-folder-name"]}>
                    {state["url"] ?? link}
                  </h3>
                  <div className={styles["folder-item-wrapper"]}>
                    {folderList.map((folder) => (
                      <div key={folder?.id} className={styles["folder-item"]}>
                        <span className={styles["link-name"]}>
                          {folder?.name}
                        </span>
                        <span className={styles["link-length"]}>
                          {folder?.link?.count}개 링크
                        </span>
                      </div>
                    ))}
                  </div>
                  <button className={styles["modal-submit-btn"]}>
                    추가하기
                  </button>
                </>
              ))}
          </div>
        </>
      )}
    </>
  );
}
