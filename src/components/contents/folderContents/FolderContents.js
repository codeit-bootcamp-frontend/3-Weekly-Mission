import "./folderContents.css";

import { useEffect, useState, useRef } from "react";
import CardList from "../cardList/cardList";
import FolderGroup from "./FolderGroup";
import Modal from "../../modal/modal";
import {
  getFolderGroup,
  getAllFolderLinksOfUser,
  getSelectionFolderLinks,
  setFolderLinksFromItems,
} from "../../../api/api";
import BaseModal, { ModalType } from "../../modal/BaseModal";

// component
const FolderContents = () => {
  const [folderGroup, setFolderGroup] = useState([]);
  const [folderLinks, setFolderLinks] = useState([]);
  const [folderId, setFolderId] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(0);
  const [modalParams, setModalParams] = useState({});

  const titleRef = useRef();

  // 폴더를 클릭했을 때 해당하는 링크목록을 가져옴
  const onClickFolderGroup = (event, key) => {
    event.preventDefault();
    setFolderId(key);

    const selectionFolder = folderGroup.find((folder) => key === folder.id);
    titleRef.current.innerHTML = selectionFolder.name;

    if (selectionFolder.linkCount > 0) {
      selectionFolder.id === "전체"
        ? getAllFolderLinksOfUser().then((rsp) =>
            setFolderLinks(setFolderLinksFromItems(rsp.data))
          )
        : getSelectionFolderLinks(selectionFolder.id).then((rsp) => {
            setFolderLinks(setFolderLinksFromItems(rsp.data));
          });
    } else {
      setFolderLinks([]);
    }
  };

  const updateModalParams = (modalType) => {
    switch (modalType) {
      case ModalType.SHARE:
        setModalParams({
          userId: 1, // TODO : context
          folderId: folderId,
        });
        break;
      default:
        break;
    }
  };

  const onShowModal = (event, modalType) => {
    event.stopPropagation();

    updateModalParams(modalType);
    setShowModal(true);
    setModalType(modalType);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  // 생성 시 폴더 목록을 가져옴
  useEffect(() => {
    getFolderGroup().then((rsp) => {
      let allLinkCount = 0;
      const folderGroupInfo = rsp.data.map((folder) => {
        allLinkCount += folder.link.count;

        return {
          id: folder.id,
          name: folder.name,
          linkCount: folder.link.count,
        };
      });

      // 서버에서 넣어주는 데이터가 없어서 임시로 넣어줌
      folderGroupInfo.unshift({
        id: "전체", // 임시키 값
        name: "전체",
        linkCount: allLinkCount,
      });
      setFolderLinks([]);

      setFolderGroup(folderGroupInfo);
    });
  }, []);

  return (
    <>
      <div className="folder_group_container">
        <FolderGroup
          folderGroup={folderGroup}
          onClickFolderGroup={onClickFolderGroup}
          toggleIndex={folderId}
        />
        <img
          src="/images/add.svg"
          className="add_folder_button"
          onClick={(event) => onShowModal(event, ModalType.ADD_FOLDER)}
        />
      </div>
      <div className="folder_group_title">
        <div className="folder_title" ref={titleRef}></div>
        {"전체" !== folderId && (
          <div className="folder_editor">
            <div onClick={(event) => onShowModal(event, ModalType.SHARE)}>
              <img src="/images/share.svg" />
              <div>공유</div>
            </div>
            <div onClick={(event) => onShowModal(event, ModalType.EDIT)}>
              <img src="/images/pen.svg" />
              <div>이름변경</div>
            </div>
            <div
              onClick={(event) => onShowModal(event, ModalType.DELETE_FOLDER)}
            >
              <img src="/images/delete.svg" />
              <div>삭제</div>
            </div>
          </div>
        )}
      </div>
      <div
        className="add_folder_button_floating"
        onClick={(event) => onShowModal(event, ModalType.ADD_FOLDER)}
      >
        <div>폴더 추가</div>
        <img src="/images/floating_add.svg" />
      </div>
      {folderLinks.length === 0 ? (
        <div className="empty_card_list">저장된 링크가 없습니다.</div>
      ) : (
        <ul className="card_list">
          <CardList items={folderLinks} isFunctional={true} />
        </ul>
      )}

      {showModal && (
        <Modal>
          {
            <BaseModal
              modalType={modalType}
              onClose={onCloseModal}
              params={modalParams}
            />
          }
        </Modal>
      )}
    </>
  );
};

export default FolderContents;
