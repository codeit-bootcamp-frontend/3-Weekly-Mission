import styles from './Profile.module.css';
import { User } from '../Nav/Nav';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

interface Props {
  user: User;
}

export default function Profile({ user }: Props) {
  return (
    <div className={cn('user')}>
      <img
        width={28}
        height={28}
        className={cn('profile')}
        src={user.profileImageSource || user['image_source']}
        alt="프로필 사진"
      />
      <span className={cn('email')}>{user.email}</span>
    </div>
  );
}
