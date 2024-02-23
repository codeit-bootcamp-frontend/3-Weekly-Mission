import { CardList } from '../CardList/index';
import { FolderLink } from '@/types/Common';

export const SharedCardList = ({
  folderLinks,
}: {
  folderLinks: FolderLink[];
}) => {
  return <CardList folderLinks={folderLinks} />;
};
