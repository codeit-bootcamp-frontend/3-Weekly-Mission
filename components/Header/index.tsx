import { useEffect, useState } from "react";
import getUserProfile from "@/api/getUserProfile";
import Image from "next/image";
import Link from "next/link";
import UserProfile from "@/components/UserProfile";
import Cta from "@/components/Cta";
import styles from "./style.module.css";

export interface UserProfileData {
  email: string;
  id: number;
  name: string;
  profileImageSource: string;
}

export default function Header() {
  const [userProfile, setUserProfile] = useState<UserProfileData | null>(null);

  const loadUserProfile = async () => {
    try {
      const userProfile = await getUserProfile();
      setUserProfile(userProfile);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadUserProfile();
  }, []);

  // null일경우 타입 오류 처리
  if (userProfile === null) {
    return null;
  }

  const { email, profileImageSource }: UserProfileData = userProfile;

  return (
    <header className={styles["linkbrary-header"]}>
      <h1 className={styles.logo}>
        <Link href="/">
          <Image src="/assets/logo.svg" width={133} height={24} alt="로고" />
        </Link>
      </h1>
      {userProfile ? (
        <UserProfile userEmail={email} userImage={profileImageSource} />
      ) : (
        <Cta />
      )}
    </header>
  );
}
