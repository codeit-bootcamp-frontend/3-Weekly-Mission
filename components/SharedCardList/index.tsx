import { CardList } from '../CardList/index';
import { FolderItem } from '@/types/Common';

export const SharedCardList = ({ links }: { links: FolderItem[] }) => {
  return <CardList links={links} />;
};
