import classNames from 'classnames/bind';

import { TSampleFolderLink } from '@api/shared-page/getSampleUserFolders';
import { useMatchedLinks } from '@hooks/useMatchedLinks';

import styles from './CardContainer.module.css';
import Card from './comp/card/Card';

const cn = classNames.bind(styles);

type TCardContainerProps = {
  links: TSampleFolderLink[] | [];
  input?: string;
};

const CardContainer = ({ links, input }: TCardContainerProps) => {
  const matchedLinks = useMatchedLinks(links, input, ['title', 'description', 'url']);

  return (
    <section className={cn('card-container')}>
      {matchedLinks.map((link) => (
        <Card key={link?.id} link={link} />
      ))}
    </section>
  );
};

export default CardContainer;
