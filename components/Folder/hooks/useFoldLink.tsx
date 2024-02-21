import { ShowAll } from "@/pages/folder/folderApiTs";
import { LinkId } from "@/pages/folder/type";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useFoldLink(selectedName: number) {
  const router = useRouter();
  const { query } = router;
  const search = query.search as string | undefined;
  const [foldLink, setFoldLink] = useState<LinkId[]>([]);

  useEffect(() => {
    const getFolder = async () => {
      const userProfileId = 1;
      try {
        const result = await ShowAll(userProfileId);
        let newLink = result;

        if (selectedName !== 0) {
          newLink = newLink.filter((item) => item.folder_id === selectedName);
        }

        if (search) {
          newLink = newLink.filter(
            (item: LinkId) =>
              (item.description && item.description.includes(search)) ||
              (item.title && item.title.includes(search)) ||
              (item.url && item.url.includes(search))
          );
        }

        setFoldLink(newLink);
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    getFolder();
  }, [selectedName, search]);
  return foldLink;
}
