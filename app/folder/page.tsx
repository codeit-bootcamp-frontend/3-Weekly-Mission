import { getUserLinks } from "../../api/api";
import FolderSection from "../../components/folder/FolderSection";

export default async function Folder() {
  const initialItems = await getUserLinks(4, undefined);
  return (
    <>
      <FolderSection initialItems={initialItems} />
    </>
  );
}
