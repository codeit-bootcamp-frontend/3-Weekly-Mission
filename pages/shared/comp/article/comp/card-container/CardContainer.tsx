import classNames from 'classnames/bind';

import { TSampleFolderLink } from '@api/shared-page/getSampleUserFolders';
import { filterMatchedDatas } from '@utils/search/filterMatchedDatas';

import styles from './CardContainer.module.css';
import Card from './comp/card/Card';

const cn = classNames.bind(styles);

type TCardContainerProps = {
  links: TSampleFolderLink[] | [];
  input?: string;
};

const CardContainer = ({ links, input }: TCardContainerProps) => {
  return (
    <section className={cn('card-container')}>
      {links
        .filter((l) => filterMatchedDatas(l, input, ['title', 'description', 'url']))
        .map((link) => (
          <Card key={link?.id} link={link} />
        ))}
    </section>
  );
};

export default CardContainer;
