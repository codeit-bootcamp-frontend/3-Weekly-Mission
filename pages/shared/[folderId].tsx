import { useEffect, useState } from 'react';
import {
  getFolderById,
  getLinksById,
  getUserByAccessToken,
  getUserById,
} from '../api/api';
import styles from '@/styles/page.module.css';
import Nav from '@/src/components/header/Nav/Nav';
import Folder from '@/src/components/header/Folder/Folder';
import Search from '@/src/components/section/Search/Search';
import Card from '@/src/components/section/Card/Card';
import FooterLinks from '@/src/components/footer/FooterLinks/FooterLinks';
import classNames from 'classnames/bind';
import { User } from '../folder';
import { useRouter } from 'next/router';

const cn = classNames.bind(styles);

export interface Folder {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
}

export interface SharedLink {
  id: number;
  created_at?: string;
  updated_at: string;
  url: string;
  title: string;
  description: string;
  image_source?: string;
  folder_id: number;
}

export default function SharePage() {
  const [keyword, setKeyword] = useState('');
  const [linkList, setLinkList] = useState<SharedLink[]>([]);
  const [user, setUser] = useState<User>(null);
  const [userId, setUserId] = useState(0);
  const [folder, setFolder] = useState<Folder>(null);
  const router = useRouter();
  const { folderId } = router.query;

  const handleSearchOnChange = (nextKeyword: string) => {
    setKeyword(nextKeyword);
  };

  useEffect(() => {
    async function getUserId() {
      const body = await getUserByAccessToken(
        localStorage.getItem('accessToken')
      );
      setUserId(body.data[0].id);
    }

    async function getUser() {
      const body = await getUserById(userId);
      setUser(body.data[0]);
    }

    async function getFolder() {
      const body = await getFolderById(+folderId);
      setFolder(body.data[0]);
    }

    async function getLinks() {
      const { data } = await getLinksById(user.id, folder.id);
      setLinkList(data);
    }

    getUserId();
    getUser();
    getFolder();
    getLinks();
  }, []);

  return (
    <>
      <header className={cn('header')}>
        <Nav user={user} />
        <Folder user={user} folder={folder} />
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
