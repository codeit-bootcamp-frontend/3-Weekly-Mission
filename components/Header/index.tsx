import Image from "next/image";
import Link from "next/link";
import UserProfile from "@/components/UserProfile";
import LoginCTA from "@/components/LoginCTA";
import styles from "./style.module.css";

interface HeaderProps {
  userProfile: UserProfileData & FolderUserData;
}

export default function Header({ userProfile }: HeaderProps) {
  const { email, profileImageSource, image_source } = userProfile;

  return (
    <header className={styles["linkbrary-header"]}>
      <h1 className={styles.logo}>
        <Link href="/">
          <Image src="/assets/logo.svg" width={133} height={24} alt="로고" />
        </Link>
      </h1>
      {userProfile ? (
        <UserProfile
          userEmail={email}
          userImage={profileImageSource ?? image_source}
        />
      ) : (
        <LoginCTA />
      )}
    </header>
  );
}
