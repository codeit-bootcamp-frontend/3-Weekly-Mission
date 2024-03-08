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

export interface FolderIdQuery extends ParsedUrlQuery {
  folderId: string[];
}

const FolderLinkCategory = ({ selectedFolderId, handleFolderIdAndName, router }: TFolderLinkCategoryProps) => {
  const folderCategoryList = useGetFolderCategoryList();

  const { openModal } = useModal();

  useEffect(() => {
    const { folderId: fi } = router.query as FolderIdQuery;
    const folderId = fi?.[0];
    const foundFolder = folderCategoryList.find((folder) => folder.id === Number(folderId));
    const foundFolderName = foundFolder?.name ?? '전체';

    handleFolderIdAndName({
      folderId: folderId ? Number(folderId) : 'total',
      folderName: foundFolderName,
    });
  }, [folderCategoryList, router]);

  return (
    <>
      {folderCategoryList.length > 1 && (
        <div className={styles['folder-link-category-wrapper']}>
          <div className={styles['folder-link-category-box']}>
            {folderCategoryList.map((folder) => (
              <Link
                // ? parameter가 있는 route(dynamic route)와 없는 route를 하나의 파일에서 처리하는 방법은 없을까 (Optional Catch-all Segments routes 제외하고...)?
                href={`/folder${folder.id === 'total' ? '' : `/${String(folder.id)}`}`}
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
