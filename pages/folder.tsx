import { useState, useEffect, useRef } from 'react';
import { getFoldersById, getLinksById } from './api/api';
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
import classNames from 'classnames';

const cn = classNames.bind(styles);

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
  link: {
    count: number;
  };
}

export interface FolderList {
  name: string;
  linkCount: number;
}

export type Id = number | undefined;

export interface FolderInfo {
  name: string;
  id: Id;
}

interface InitialData {
  folderInfo: FolderInfo;
  userId: number;
  links: LinkType[];
  folderList: FolderList[];
}

interface Props {
  initialData: InitialData;
}

export async function getServerSideProps() {
  const folderInfo: FolderInfo = {
    name: '전체',
    id: 0,
  };
  const userId = 1;
  let links: LinkType[];
  let folderList: FolderList[];
  {
    const data: LinkType[] = (await getLinksById(folderInfo.id)).data;
    if (!data) return;
    links = data;
  }
  {
    const data: Folder[] = (await getFoldersById(userId)).data;
    if (!data) return;
    folderList = data.map((element: Folder) => {
      return { name: element.name, linkCount: element.link.count };
    });
  }

  const initialData = {
    folderInfo,
    userId,
    links,
    folderList,
  };

  return {
    props: { initialData },
  };
}

export default function FolderPage({ initialData }: Props) {
  const [folderInfo, setFolderInfo] = useState<FolderInfo>(
    initialData.folderInfo
  );
  const [folderList, setFolderList] = useState<FolderList[]>(
    initialData.folderList
  );
  const [userId, setUserId] = useState(initialData.userId);
  const [links, setLinks] = useState<LinkType[]>(initialData.links);
  const [keyword, setKeyword] = useState('');
  const observeTargets = useRef<HTMLDivElement[]>([]);
  const showFixedAddLink = useIntersectionObserver(observeTargets.current);

  const handleSearchOnChange = (nextKeyword: string) => {
    setKeyword(nextKeyword);
  };

  const handleChangeFolder = (folder: FolderInfo) => {
    setFolderInfo({ name: folder.name, id: folder.id });
  };

  const handleSetUserId = (nextUserId: number) => {
    setUserId(nextUserId);
  };

  useEffect(() => {
    async function getFolderLinks() {
      const { data } = await getLinksById(folderInfo.id);
      if (!data) return;
      setLinks(data);
    }

    async function getFolderLists() {
      const { data } = await getFoldersById(userId);
      if (!data) return;
      setFolderList(
        data.map((element: Folder) => {
          return { name: element.name, linkCount: element.link.count };
        })
      );
    }

    getFolderLinks();
    getFolderLists();
  }, [folderInfo.id, userId]);

  return (
    <>
      <header className={cn('header')}>
        <Nav className="not-fixed" id={1} setUserId={handleSetUserId} />
        <div
          className={cn('observe-arget')}
          ref={(element) =>
            observeTargets.current.push(element as HTMLDivElement)
          }
        >
          <AddLink folderList={folderList} />
        </div>
        {showFixedAddLink && (
          <AddLink folderList={folderList} className="fixed" />
        )}
      </header>
      <section className={cn('section')}>
        <Search handleOnChange={handleSearchOnChange} />
        {keyword && (
          <span className={cn('search-esult')}>
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
          <div className={cn('folders__folder-nfo')}>
            <span className={cn('folders__folder-ame')}>{folderInfo.name}</span>
            {folderInfo.name === '전체' || (
              <div className={cn('folders__folder-dit')}>
                <EditOption
                  src="/images/share.png"
                  optionName="공유"
                  userId={userId}
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
                      folderList={folderList}
                    />
                  );
                })}
            </div>
          ) : (
            <div className={cn('no-ink')}>저장된 링크가 없습니다.</div>
          )}
        </div>
      </section>
      <footer className={cn('footer')}>
        <div
          className={cn('observe-arget')}
          ref={(element) =>
            observeTargets.current.push(element as HTMLDivElement)
          }
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
