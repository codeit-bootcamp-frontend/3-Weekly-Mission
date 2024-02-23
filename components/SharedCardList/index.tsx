import { CardList } from '../CardList/index';
import { FolderLink } from '@/types/Common';

interface Props {
  folderLinks: FolderLink[];
}

export const SharedCardList = ({ folderLinks }: Props) => {
  return <CardList folderLinks={folderLinks} />;
};
