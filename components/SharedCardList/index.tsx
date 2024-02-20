import { CardList } from '../CardList/index';
import { FolderItem } from '@/types/Common';

export const SharedCardList = ({ link }: { link: FolderItem[] }) => {
  return <CardList link={link} />;
};
