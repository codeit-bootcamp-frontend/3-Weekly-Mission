import styles from './Profile.module.css';
import classNames from 'classnames/bind';
import { useRecoilState } from 'recoil';
import { userState } from '@/src/state/atoms';

const cn = classNames.bind(styles);

export default function Profile() {
  const [user] = useRecoilState(userState);

  return (
    <div className={cn('user')}>
      <img
        width={28}
        height={28}
        className={cn('profile')}
        src={user['image_source']}
        alt="프로필 사진"
      />
      <span className={cn('email')}>{user.email}</span>
    </div>
  );
}
