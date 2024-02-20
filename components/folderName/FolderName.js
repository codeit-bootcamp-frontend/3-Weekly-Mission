import { useState, useEffect } from 'react';
import { SAMPLE_FOLDER } from '@/public/URL';
import styles from './FolderName.module.css';
import Image from 'next/image';

function FolderName() {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(SAMPLE_FOLDER);
      const data = await response.json();
      setUserInfo(data);
    };

    fetchData();
  }, []);

  if (!userInfo) {
    return null;
  }

  return (
    <main className={styles.main}>
      <div className={styles.mainSon}>
        <Image
          width={28}
          height={28}
          className={styles.profileImage}
          src={userInfo['folder']['owner']['profileImageSource']}
          alt="profile-image"
        />
        <h6 className={styles.userNickname}>
          {'@' + userInfo['folder']['owner']['name']}
        </h6>
        <p className={styles.folderName}>{userInfo['folder']['name']}</p>
      </div>
    </main>
  );
}

export default FolderName;
