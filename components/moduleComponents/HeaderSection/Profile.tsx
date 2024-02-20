import useUserIdData from "../../../hook/useUserIdData";
import Link from "next/link";
import { UserIdType } from "../../../types/Types";
import styles from "./HeaderSection.module.css";
import Image from "next/image";
import { logo_svg } from "@/public/image";

export default function Profile() {
  const { userIdDatas } = useUserIdData();
  return (
    <div>
      {userIdDatas ? (
        <div className={styles.nav}>
          <Link href="/">
            <Image src={logo_svg} alt="로고" width={140} height={24} />
          </Link>
          {userIdDatas.map((profile: UserIdType) => (
            <div className={styles.profile_Box} key={profile.id}>
              <Image
                className={styles.profile_Image}
                src={profile.image_source}
                alt="내 프로필"
                width={30}
                height={30}
              />
              <span>{profile.email}</span>
            </div>
          ))}
        </div>
      ) : (
        <button>로그인</button>
      )}
    </div>
  );
}
