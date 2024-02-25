import { getUserProfileById } from "@/lib/api";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./OwnerInfo.module.scss";
import Image from "next/image";

type UserProfile = {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
};

const initValue = {
  id: 0,
  created_at: "",
  name: "나는짱",
  image_source:
    "https://codeit-images.codeit.com/badges/COMPLETE_100_LESSONS.png",
  email: "midcon@naver.com",
  auth_id: "b9d4649a-8d92-4776-8f69-80abe2786721",
};

export default function OwnerInfo() {
  const [userProfile, setUserProfile] = useState<UserProfile>(initValue);
  const { image_source, email, name: folderName } = userProfile;

  const router = useRouter();
  const { user: userId } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserProfileById(Number(userId));
        if (!data) return;
        console.log(data);
        setUserProfile(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [userId]);

  return (
    <>
      <Image
        className={styles.icon}
        src={image_source}
        width="60"
        height="60"
        alt="폴더 주인 아이콘"
      />
      <div className={styles.texts}>
        <p className={styles.owner}>{email}</p>
        <h1 className={styles.folderName}>{folderName}</h1>
      </div>
    </>
  );
}
