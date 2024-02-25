import { useState, useEffect } from 'react';
import { getUser, getUserById } from '@/pages/api/api';
import Profile from '../Profile/Profile';
import styles from './Nav.module.css';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

interface Props {
  className?: string | undefined;
  setUserId?: (value: number) => void;
  id?: number | undefined;
}

export interface User {
  id: number;
  name: string;
  email: string;
  profileImageSource?: string;
  image_source?: string;
}

export default function Nav({ className = '', setUserId, id }: Props) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function applyGetUser() {
      const nextUser = await getUser();
      if (!nextUser) return;
      setUser(nextUser);
    }

    async function apllyGetUserById(id: number) {
      const nextUser = await getUserById(id);
      if (!nextUser) return;
      setUser(nextUser.data[0]);
      if (setUserId) {
        setUserId(nextUser.data[0].id);
      }
    }

    if (id) apllyGetUserById(id);
    else applyGetUser();
  }, [id, setUserId]);

  return (
    <nav className={cn(className, 'nav')}>
      <Link href="/">
        <div className={cn('logo')}>
          <Image
            fill
            src="/images/logo.svg"
            alt="Linkbrary 로고"
            priority={true}
            style={{ objectFit: 'cover' }}
          />
        </div>
      </Link>
      {user ? (
        <Profile user={user} />
      ) : (
        <Link className={cn('cta', 'cta-short')} href="signin.html">
          <span>로그인</span>
        </Link>
      )}
    </nav>
  );
}
