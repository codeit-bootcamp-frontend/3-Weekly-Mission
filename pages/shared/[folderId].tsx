import { useEffect, useState } from 'react';
import { getLinksById } from '../api/api';
import styles from '@/styles/page.module.css';
import Nav from '@/src/components/header/Nav/Nav';
import Folder from '@/src/components/header/Folder/Folder';
import Search from '@/src/components/section/Search/Search';
import Card from '@/src/components/section/Card/Card';
import FooterLinks from '@/src/components/footer/FooterLinks/FooterLinks';
import classNames from 'classnames/bind';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { userState } from '@/src/state/atoms';

const cn = classNames.bind(styles);

export interface SharedLink {
  id: number;
  created_at: string;
  updated_at: string;
  url: string;
  title: string;
  description: string;
  image_source: string;
  folder_id: number;
}

export default function SharePage() {
  const [user] = useRecoilState(userState);
  const [keyword, setKeyword] = useState('');
  const [linkList, setLinkList] = useState<SharedLink[]>([]);
  const router = useRouter();
  const { folderId } = router.query;

  const handleSearchOnChange = (nextKeyword: string) => {
    setKeyword(nextKeyword);
  };

  useEffect(() => {
    async function getLinks() {
      const { data } = await getLinksById(user?.id, +folderId);
      if (!data) return;
      setLinkList(data);
    }

    getLinks();
  }, [folderId]);

  return (
    <>
      <header className={cn('header')}>
        <Nav />
        <Folder folderId={+folderId} userId={user.id} />
      </header>
      <section className={cn('section')}>
        <Search handleOnChange={handleSearchOnChange} />
        {keyword && (
          <span className="search-result">
            <strong>{keyword}</strong>으로 검색한 결과입니다.
          </span>
        )}
        <div className="pages">
          {linkList
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
