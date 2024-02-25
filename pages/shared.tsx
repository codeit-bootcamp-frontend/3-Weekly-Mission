import { useState } from 'react';
import { getFolder } from './api/api';
import styles from '@/styles/page.module.css';
import Nav from '@/src/components/header/Nav/Nav';
import Folder from '@/src/components/header/Folder/Folder';
import Search from '@/src/components/section/Search/Search';
import Card from '@/src/components/section/Card/Card';
import FooterLinks from '@/src/components/footer/FooterLinks/FooterLinks';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

export interface SharedLink {
  id: number;
  createdAt?: string;
  created_at?: string;
  url: string;
  title: string;
  description: string;
  imageSource?: string;
  image_source?: string;
}

interface Props {
  links: SharedLink[];
}

export async function getStaticProps() {
  const { folder } = await getFolder();
  const links: SharedLink[] = folder.links;

  return {
    props: {
      links,
    },
  };
}

export default function SharePage({ links }: Props) {
  const [keyword, setKeyword] = useState('');

  const handleSearchOnChange = (nextKeyword: string) => {
    setKeyword(nextKeyword);
  };

  return (
    <>
      <header className={cn('header')}>
        <Nav />
        <Folder />
      </header>
      <section className={cn('section')}>
        <Search handleOnChange={handleSearchOnChange} />
        {keyword && (
          <span className="search-result">
            <strong>{keyword}</strong>으로 검색한 결과입니다.
          </span>
        )}
        <div className="pages">
          {links
            .filter((element) => {
              const { title, url, description } = element;
              return (
                url.toLowerCase().includes(keyword) ||
                title?.toLowerCase().includes(keyword) ||
                description?.toLowerCase().includes(keyword)
              );
            })
            .map((element: SharedLink) => {
              return <Card key={element.id} page={element} />;
            })}
        </div>
      </section>
      <footer className={cn('footer')}>
        <div className="footer-box">
          <span className="copyright">©codeit - 2023</span>
          <FooterLinks target="_blank" rel="noopener noreferrer" />
        </div>
      </footer>
    </>
  );
}