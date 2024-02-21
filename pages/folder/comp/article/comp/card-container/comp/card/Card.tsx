import { useState } from 'react';

import classNames from 'classnames/bind';

import SelectMenu from '@components/ui/atoms/select-menu';
import LinkCard from '@components/ui/molecules/card/link-card';
import { TCardProviderContext } from '@components/ui/molecules/card/link-card/context/CardProvider';
import AddToFolderModal from '@components/ui/molecules/modal/add-to-folder-modal/AddToFolderModal';
import LinkDeleteModal from '@components/ui/molecules/modal/link-delete-modal/LinkDeleteModal';

import { TFolderLink } from '@api/folder-page/getSortedFolderLinksData';
import { useCloseModal } from '@hooks/useCloseModal';
import { useModal } from '@hooks/useModal';

import styles from './Card.module.css';

const cn = classNames.bind(styles);

type TCardProps = {
  link: TFolderLink;
};

const Card = ({ link }: TCardProps) => {
  const [selectedLinkId, setSelectedLinkId] = useState<number | null>(null);
  const { isModalOpen, modalRef, toggleModal } = useCloseModal<HTMLDivElement>();

  const handleKebabButton = (linkId: number) => {
    setSelectedLinkId(linkId);
    toggleModal();
  };

  const { openModal } = useModal();

  const handleDeleteMenuBtn = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ModalComponent: typeof LinkDeleteModal,
    linkUrl: string,
  ) => {
    e.preventDefault();
    openModal({ Component: ModalComponent, props: { linkUrl } });
  };

  const handleFolderAddMenuBtn = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ModalComponent: typeof AddToFolderModal,
    linkUrl: string,
  ) => {
    e.preventDefault();
    openModal({ Component: ModalComponent, props: { linkUrl } });
  };

  const processedFolderPageLinkData: TCardProviderContext = {
    linkId: link.id,
    createdAt: link.created_at,
    description: link.description,
    imageSource: link.image_source,
    url: link.url,
    title: link.title,
    folderId: link.folder_id,
  };

  return (
    <LinkCard {...processedFolderPageLinkData}>
      <LinkCard.CardCover asAnchor className={cn('link-card')}>
        <div className={cn('card-image-box')}>
          <LinkCard.CardImage className={cn('link-image')} alt='카드 링크 이미지' />
          <LinkCard.Bookmark />
        </div>
        <div className={cn('link-text-box', 'relative')}>
          <div className={cn('justify-between')}>
            <LinkCard.TimeElapsed className={cn('link-elapsed')} />
            <LinkCard.KebabButton onClickHandler={() => handleKebabButton(link.id)} />
            {selectedLinkId === link.id && isModalOpen && (
              <SelectMenu modalRef={modalRef}>
                <SelectMenu.StMenuButton onClick={(e) => handleDeleteMenuBtn(e, LinkDeleteModal, link.url)}>
                  삭제하기
                </SelectMenu.StMenuButton>
                <SelectMenu.StMenuButton onClick={(e) => handleFolderAddMenuBtn(e, AddToFolderModal, link.url)}>
                  폴더에 추가
                </SelectMenu.StMenuButton>
              </SelectMenu>
            )}
          </div>
          <LinkCard.Description className={cn('link-description')} />
          <LinkCard.CreatedAt className={cn('link-createdAt')} />
        </div>
      </LinkCard.CardCover>
    </LinkCard>
  );
};

export default Card;
