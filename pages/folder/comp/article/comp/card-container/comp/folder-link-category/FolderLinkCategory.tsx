import { ParsedUrlQuery } from 'querystring';

import { Dispatch, SetStateAction, useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { NextRouter } from 'next/router';

import FolderAddModal from '@components/ui/molecules/modal/folder-add-modal/FolderAddModal';

import { useModal } from '@hooks/useModal';

import styles from './FolderLinkCategory.module.css';
import { useGetFolderCategoryList } from './hooks/useGetFolderCategoryList';

type TFolderLinkCategoryProps = {
  selectedFolderId: number | 'total';
  handleFolderIdAndName: Dispatch<
    SetStateAction<{
      folderId: 'total' | number;
      folderName: string;
    }>
  >;
  router: NextRouter;
};

interface FolderIdQuery extends ParsedUrlQuery {
  folderId?: string[];
}

const FolderLinkCategory = ({ selectedFolderId, handleFolderIdAndName, router }: TFolderLinkCategoryProps) => {
  const folderCategoryList = useGetFolderCategoryList();

  const { openModal } = useModal();

  useEffect(() => {
    const { folderId } = router.query as FolderIdQuery;

    handleFolderIdAndName({
      folderId: folderId ? Number(folderId) : 'total',
      folderName: folderId
        ? (folderCategoryList.find((folderCategory) => folderCategory.id === Number(folderId[0]))?.name as string)
        : '전체',
    });
  }, [folderCategoryList, router]);

  return (
    <>
      {folderCategoryList.length > 1 && (
        <div className={styles['folder-link-category-wrapper']}>
          <div className={styles['folder-link-category-box']}>
            {folderCategoryList.map((folder) => (
              <Link
                // ? userId에는 현재 로그인 중인 유저 id를 넣기. 가 맞나?
                // ? 페이지 url path 경로만 바꾸고 페이지 전환은 하지 않는 방법은 없나?
                // href={{ pathname: `/folder${folder.id === 'total' ? '' : `/${encodeURIComponent(folder.id)}`}` }}
                href={`/folder${folder.id === 'total' ? '' : `/${encodeURIComponent(folder.id)}`}`}
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
