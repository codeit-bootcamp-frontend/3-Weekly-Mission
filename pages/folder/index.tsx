import { useState, useEffect, useRef } from 'react';
import {
  getFoldersByAccessToken,
  getFoldersById,
  getLinks,
  getLinksById,
  getUserByAccessToken,
} from '../api/api';
import styles from '@/styles/page.module.css';
import Nav from '@/src/components/header/Nav/Nav';
import Search from '@/src/components/section/Search/Search';
import FooterLinks from '@/src/components/footer/FooterLinks/FooterLinks';
import AddLink from '@/src/components/header/AddLink/AddLink';
import FolderList from '@/src/components/section/FolderList/FolderList';
import EditOption from '@/src/components/section/EditOption/EditOption';
import Card from '@/src/components/section/Card/Card';
import useIntersectionObserver from '@/src/hooks/useIntersectionObserver';
import 'intersection-observer';
import classNames from 'classnames/bind';
import { useRouter } from 'next/router';

const cn = classNames.bind(styles);

export interface User {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
}

export interface LinkType {
  id: number;
  created_at?: string;
  createdAt?: string;
  updated_at: string | null;
  url: string;
  title: string | null;
  description: string | null;
  image_source?: string | null;
  imageSource?: string;
  folder_id: number | null;
}

export interface Folder {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
  link?: {
    count: number;
  };
}

export interface FolderLinkCount {
  name: string;
  linkCount: number;
}

export type Id = number | undefined;

export interface FolderInfo {
  name: string;
  id: Id;
}

export default function FolderPage() {
  const [folderInfo, setFolderInfo] = useState<FolderInfo>({
    name: '전체',
    id: 0,
  });
  const [user, setUser] = useState<User>(null);
  const [folderList, setFolderList] = useState<Folder[]>([]);
  const [links, setLinks] = useState<LinkType[]>([]);
  const [folderLinkCount, setFolderLinkCount] = useState<FolderLinkCount[]>([]);
  const [keyword, setKeyword] = useState('');
  const observeTargets = useRef<HTMLDivElement[]>([]);
  const showFixedAddLink = useIntersectionObserver(observeTargets.current);
  const router = useRouter();

  const handleSearchOnChange = (nextKeyword: string) => {
    setKeyword(nextKeyword);
  };

  const handleChangeFolder = (folder: FolderInfo) => {
    setFolderInfo({ name: folder.name, id: folder.id });
  };

  useEffect(() => {
    async function getUser(accessToken: string) {
      const body = await getUserByAccessToken(accessToken);
      setUser(body.data[0]);
    }

    async function getFolderLinks(accessToken: string) {
      const { data } = await getLinks(accessToken);
      setLinks(data.folder);
    }

    async function getFolderList(accessToken: string) {
      const { data } = await getFoldersByAccessToken(accessToken);
      setFolderList(data.folder);
    }

    async function getFolderLinkCount() {
      const { data } = await getFoldersById(user.id);
      if (!data) return;
      setFolderList(
        data.map((element: Folder) => {
          return { name: element.name, linkCount: element.link.count };
        })
      );
    }

    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      router.push('/signin');
    } else {
      getUser(accessToken);
      getFolderLinks(accessToken);
      getFolderList(accessToken);
      if (user) {
        getFolderLinkCount();
      }
    }
  }, []);

  return (
    <>
      <header className={cn('header')}>
        <Nav className="not-fixed" user={user} />
        <div
          className={cn('observe-target')}
          ref={(element) => {
            if (element && !observeTargets.current.includes(element)) {
              observeTargets.current.push(element);
            }
          }}
        >
          <AddLink folderLinkCount={folderLinkCount} />
        </div>
        {showFixedAddLink && (
          <AddLink folderLinkCount={folderLinkCount} className="fixed" />
        )}
      </header>
      <section className={cn('section')}>
        <Search handleOnChange={handleSearchOnChange} />
        {keyword && (
          <span className={cn('search-result')}>
            <strong className={cn('strong')}>{keyword}</strong>으로 검색한
            결과입니다.
          </span>
        )}
        <div className={cn('folders')}>
          <FolderList
            folderName={folderInfo.name}
            onClickFolder={handleChangeFolder}
            id={1}
          />
          <div className={cn('folders__folder-info')}>
            <span className={cn('folders__folder-name')}>
              {folderInfo.name}
            </span>
            {folderInfo.name === '전체' || (
              <div className={cn('folders__folder-edit')}>
                <EditOption
                  src="/images/share.png"
                  optionName="공유"
                  userId={user.id}
                  folder={folderInfo}
                />
                <EditOption
                  src="/images/pen.png"
                  optionName="이름 변경"
                  folder={folderInfo}
                />
                <EditOption
                  src="/images/delete.png"
                  optionName="삭제"
                  folder={folderInfo}
                />
              </div>
            )}
          </div>
          {links.length > 0 ? (
            <div className="pages">
              {links
                .filter((element) => {
                  const { title, url, description } = element;
                  return (
                    (!folderInfo.id || element?.folder_id === folderInfo.id) &&
                    (url.toLowerCase().includes(keyword) ||
                      title?.toLowerCase().includes(keyword) ||
                      description?.toLowerCase().includes(keyword))
                  );
                })
                .map((element) => {
                  return (
                    <Card
                      key={element.id}
                      page={element}
                      folderLinkCount={folderLinkCount}
                    />
                  );
                })}
            </div>
          ) : (
            <div className={cn('no-link')}>저장된 링크가 없습니다.</div>
          )}
        </div>
      </section>
      <footer className={cn('footer')}>
        <div
          className={cn('observe-target')}
          ref={(element) => {
            if (element && !observeTargets.current.includes(element)) {
              observeTargets.current.push(element);
            }
          }}
        >
          <div className={cn('footer-box')}>
            <span className={cn('copyright')}>©codeit - 2023</span>
            <FooterLinks target="_blank" rel="noopener noreferrer" />
          </div>
        </div>
      </footer>
    </>
  );
}
