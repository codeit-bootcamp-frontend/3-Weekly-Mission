import classNames from 'classnames/bind';

import { TSampleFolderLink } from '@api/shared-page/getSampleUserFolders';
import { useInput } from '@hooks/useInput';

import styles from './Article.module.css';
import CardContainer from './comp/card-container/CardContainer';
import SearchBar from './comp/search-bar/SearchBar';

const cn = classNames.bind(styles);

type TArticleProps = {
  links: TSampleFolderLink[] | [];
};

const Article = ({ links }: TArticleProps) => {
  const [input, onChange, clearInput] = useInput('');

  return (
    <article className={cn('contents')}>
      <div className={cn('article-area')}>
        <SearchBar clearInput={clearInput} input={input} onChange={onChange} />
        <CardContainer links={links} input={input} />
      </div>
    </article>
  );
};

export default Article;
