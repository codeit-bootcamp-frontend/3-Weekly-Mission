import Navbar from "../components/Navbar/Navbar";
import AddLink from "../components/AddLink/AddLink";
import Content from "../components/Content/Content";

function FolderPage() {
  const isShared = false;
  return (
    <>
      <Navbar isShared={isShared} />
      <AddLink />
      <Content />
    </>
  );
}

export default FolderPage;
