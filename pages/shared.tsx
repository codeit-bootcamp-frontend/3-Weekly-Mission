import { useState, useEffect } from "react";
import getSampleFolder from "@/api/getSampleFolder";
import Header from "@/components/Header";
import SharedTitlebar from "@/components/SharedComponents/SharedTitlebar";
import SharedContent from "@/components/SharedComponents/SharedContent";
import Footer from "@/components/Footer";

export interface FolderLinksData {
  map(
    arg0: (link: FolderLinksData) => import("react").JSX.Element | null
  ): import("react").ReactNode;
  id: number;
  createdAt: Date;
  url: string;
  title: string;
  description: string;
  imageSource: string;
}
[];

interface FolderOwnerData {
  id: number;
  name: string;
  profileImageSource: string;
}

export interface FolderData {
  count: number;
  id: number;
  links: FolderLinksData;
  name: string;
  owner: FolderOwnerData;
}

function SharedPage() {
  const [folder, setFolder] = useState<FolderData | null>(null);

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
  }, []);

  // null일경우 타입 오류 처리
  if (folder === null) {
    return null;
  }

  const {
    owner: { profileImageSource: profileImg, name: owner },
    name: folderName,
  }: FolderData = folder;

  return (
    <>
      <Header />
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

export default SharedPage;
