import { Dispatch, SetStateAction, useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import FolderAddModal from '@components/ui/molecules/modal/folder-add-modal/FolderAddModal';
import { useFolderPageServerSideProp } from '@pages/folder/context/folderPageContext';

import { useModal } from '@hooks/useModal';

import styles from './FolderLinkCategory.module.css';
import { useGetFolderCategoryList } from './hooks/useGetFolderCategoryList';

import { useFolderStore } from '@/store/folderStore';

type TFolderLinkCategoryProps = {
  selectedFolderId: number | 'total';
  handleFolderIdAndName: Dispatch<
    SetStateAction<{
      folderId: 'total' | number;
      folderName: string;
    }>
  >;
};

const FolderLinkCategory = ({ selectedFolderId, handleFolderIdAndName }: TFolderLinkCategoryProps) => {
  // ssr로 받아온 폴더 카테고리 리스트 state에 initial state로 주입시킴
  // prerendering 이용하면서 폴더 추가했을 때 client 쪽에서 ajax로 처리하는 방식
  const initialFolderCategoryList = useFolderPageServerSideProp();
  const { folderCategoryList } = useGetFolderCategoryList(initialFolderCategoryList);
  const setFolderCategoryList = useFolderStore((state) => state.setFolderCategoryList);
  useEffect(() => {
    setFolderCategoryList(folderCategoryList);
  }, [folderCategoryList, setFolderCategoryList]);

  const { openModal } = useModal();

  // userId는 걍 로컬 스토리지에 저장하고 가져오는 게 좋을까?
  const userId = useFolderStore((state) => state.userId);

  return (
    <>
      {folderCategoryList.length > 1 && (
        <div className={styles['folder-link-category-wrapper']}>
          <div className={styles['folder-link-category-box']}>
            {folderCategoryList.map((folder) => (
              <Link
                // ? userId에는 현재 로그인 중인 유저 id를 넣기. 가 맞나?
                href={{ search: `user=${userId}&folder=${folder.id}` }}
                type='button'
                className={`${styles['folder-link-category-btn']} ${
                  selectedFolderId === folder.id ? styles.selected : ''
                }`}
                key={folder.id}
                onClick={() =>
                  handleFolderIdAndName({
                    folderId: folder.id,
                    folderName: folder.name,
                  })
                }
              >
                {folder.name}
              </Link>
            ))}
          </div>
          <button
            type='button'
            className={styles['folder-link-category-add-btn']}
            onClick={() => openModal({ Component: FolderAddModal })} // no event dispatch
          >
            <Image
              fill
              className={styles['folder-link-category-add-btn-img']}
              src={'/images/folder/folder-add.svg'}
              alt='폴더 카테고리 추가 버튼'
            />
          </button>

          {/* on mobile size */}
          <button
            type='button'
            className={styles['floating-category-add-btn']}
            onClick={() => openModal({ Component: FolderAddModal })}
          >
            <span className={styles['floating-category-add-btn__text']}>폴더 추가</span>
            <Image
              width={16}
              height={16}
              className={styles['folder-link-category-floating-btn-add-img']}
              src={'/images/folder/floating-folder-add.svg'}
              alt='플로팅 폴더 카테고리 추가 버튼'
            />
          </button>
        </div>
      )}
    </>
  );
};

export default FolderLinkCategory;
