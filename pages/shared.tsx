import { useState, useEffect } from "react";
import getSampleFolder from "@/api/getSampleFolder";
import getUserProfile from "@/api/getUserProfile";
import Header from "@/components/Header";
import SharedTitlebar from "@/components/SharedComponents/SharedTitlebar";
import SharedContent from "@/components/SharedComponents/SharedContent";
import Footer from "@/components/Footer";

export default function SharedPage() {
  const [folder, setFolder] = useState<FolderData | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfileData | null>(null);

  const loadUserProfile = async () => {
    try {
      const userProfile = await getUserProfile();
      setUserProfile(userProfile);
    } catch (error) {
      console.error(error);
    }
  };

  const loadFolderDate = async () => {
    try {
      const folderData = await getSampleFolder();
      setFolder(folderData.folder);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadFolderDate();
    loadUserProfile();
  }, []);

  // null일경우 타입 오류 처리
  if (userProfile === null || folder === null) {
    return null;
  }

  const {
    owner: { profileImageSource: profileImg, name: owner },
    name: folderName,
  }: FolderData = folder;

  return (
    <>
      <Header userProfile={userProfile} />
      <SharedTitlebar
        owner={owner}
        profileImg={profileImg}
        folderName={folderName}
      />
      <SharedContent links={folder.links} />
      <Footer />
    </>
  );
}
