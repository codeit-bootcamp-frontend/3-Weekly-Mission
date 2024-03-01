import { useEffect, useState } from "react";
import getFolderUser from "@/api/getFolderUser";
import getAllFolderLinks from "@/api/getAllFolderLinks";
import Header from "@/components/Header";
import FolderTitlebar from "@/components/FolderComponents/FolderTitlebar";
import FolderContent from "@/components/FolderComponents/FolderContent";
import Footer from "@/components/Footer";

export default function FolderPage() {
  const [folderUser, setFolderUser] = useState<FolderUserData | null>(null);
  const [links, setLinks] = useState([]);

  const loadFolderUser = async () => {
    try {
      const folderUserData = await getFolderUser();
      setFolderUser(folderUserData.data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const loadAllFolderLinks = async () => {
    try {
      const allFolderLinks = await getAllFolderLinks();
      setLinks(allFolderLinks.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadFolderUser();
    loadAllFolderLinks();
  }, []);

  // null일경우 타입 오류 처리
  if (folderUser === null) {
    return null;
  }

  return (
    <>
      <Header userProfile={folderUser} />
      <FolderTitlebar />
      <FolderContent links={links} />
      <Footer />
    </>
  );
}
