import Navbar from "@/components/Navbar/Navbar";
import AddLinkForm from "@/components/AddLinkForm/AddLinkForm";
import Content from "@/components/Content/Content";
import { useEffect } from "react";
import { RecoilRoot } from "recoil";

function FolderPage() {
  useEffect(() => {
    window.Kakao.cleanup();
    window.Kakao.init(process.env.NEXT_PUBLIC_JavaScript_KEY);
  }, []);
  return (
    <>
      <RecoilRoot>
        <Navbar isSticky />
        <AddLinkForm />
        <Content />
      </RecoilRoot>
    </>
  );
}

export default FolderPage;
