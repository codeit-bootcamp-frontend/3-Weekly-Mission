import { useState, useEffect, useRef } from 'react';
import {
  getFolderLinks,
  getFoldersByAccessToken,
  getFoldersById,
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
import { useRecoilState } from 'recoil';
import { folderInfoState, userState } from '@/src/state/atoms';
import { Folder, FolderInfo, FolderLinkCount, LinkType } from '.';

const cn = classNames.bind(styles);

export default function FolderPage() {
  const router = useRouter();
  const { folderId } = router.query;
  const [folderInfo, setFolderInfo] = useRecoilState(folderInfoState);
  const [user, setUser] = useRecoilState(userState);
  const [folderList, setFolderList] = useState<Folder[]>([]);
  const [links, setLinks] = useState<LinkType[]>([]);
  const [folderLinkCount, setFolderLinkCount] = useState<FolderLinkCount[]>([]);
  const [keyword, setKeyword] = useState('');
  const [isShowFixedAddLink, setIsShowFIxedAddLink] = useState(false);
  const observeTargets = useRef<HTMLDivElement[]>([]);

  useIntersectionObserver(observeTargets.current, setIsShowFIxedAddLink);

  const handleSearchOnChange = (nextKeyword: string) => {
    setKeyword(nextKeyword);
  };

  const handleChangeFolder = (folder: FolderInfo) => {
    setFolderInfo({ name: folder.name, id: folder.id });
  };

  useEffect(() => {
    async function getUser(accessToken: string) {
      const { data } = await getUserByAccessToken(accessToken);
      if (!data) return;
      setUser(data[0]);
    }

    async function getFolderList(accessToken: string) {
      const { data } = await getFoldersByAccessToken(accessToken);
      if (!data) return;
      setFolderList(data.folder);
    }

    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      router.push('/signin');
    } else {
      getUser(accessToken);
      getFolderList(accessToken);
    }
  }, []);

  useEffect(() => {
    const folderName = folderList.find((element: Folder) => {
      return element.id === +folderId;
    })?.name;

    if (folderName) {
      setFolderInfo({ name: folderName, id: +folderId });
    }

    async function getLinks() {
      const { data } = await getFolderLinks(
        localStorage.getItem('accessToken'),
        +folderId
      );
      if (!data) return;
      setLinks(data.folder);
    }

    async function getFolderLinkCount() {
      const { data } = await getFoldersById(user.id);
      if (!data) return;
      setFolderLinkCount(
        data.map((element: Folder) => {
          return { name: element.name, linkCount: element.link.count };
        })
      );
    }

    getLinks();
    if (user) {
      getFolderLinkCount();
    }
  }, [user, folderId, folderList]);

  return (
    <>
      <header className={cn('header')}>
        <Nav className="not-fixed" />
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
        {isShowFixedAddLink && (
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
            userId={user?.id}
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
                  userId={user?.id}
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
          {links?.length > 0 ? (
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
