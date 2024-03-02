import { useState } from 'react';

import classNames from 'classnames/bind';

import { useMatchedLinks } from '@hooks/useMatchedLinks';

import styles from './CardContainer.module.css';
import CardContainerOptions from './comp/card-container-options/CardContainerOptions';
import Card from './comp/card/Card';
import FolderLinkCategory from './comp/folder-link-category/FolderLinkCategory';
import { useGetSortedFolderLinksData } from './comp/hooks/useGetSortedFolderLinksData';

const cn = classNames.bind(styles);

type TCardContainerProps = {
  input?: string;
};

const CardContainer = ({ input }: TCardContainerProps) => {
  const [folderIdAndName, setFolderIdAndName] = useState<{ folderId: 'total' | number; folderName: string }>({
    folderId: 'total',
    folderName: '',
  });

  const sortedLinks = useGetSortedFolderLinksData(folderIdAndName.folderId === 'total' ? '' : folderIdAndName.folderId);

  const matchedLinks = useMatchedLinks(sortedLinks, input, ['title', 'description', 'url']);

  return (
    <div className={cn('card-container-wrapper')}>
      <div className={cn('card-container-controllers')}>
        <FolderLinkCategory selectedFolderId={folderIdAndName.folderId} handleFolderIdAndName={setFolderIdAndName} />
        <div className={cn('card-container-name-option-box')}>
          <h3 className={cn('card-container-category-name')}>{folderIdAndName.folderName}</h3>
          {folderIdAndName.folderId !== 'total' && !!sortedLinks?.length && <CardContainerOptions />}
        </div>
      </div>
      {sortedLinks?.length ? (
        <section className={cn('card-container')}>
          {matchedLinks.map((link) => (
            <Card key={link.id} link={link} />
          ))}
        </section>
      ) : (
        <div className={cn('no-links')}>저장된 링크가 없습니다.</div>
      )}
    </div>
  );
};

export default CardContainer;
