import styles from './Profile.module.css';
import { User } from '../Nav/Nav';

interface Props {
  user: User;
}

export default function Profile({ user }: Props) {
  return (
    <div className={styles['user']}>
      <img
        width={28}
        height={28}
        className={styles['profile']}
        src={user.profileImageSource || user['image_source']}
        alt="프로필 사진"
      />
      <span className={styles['email']}>{user.email}</span>
    </div>
  );
}