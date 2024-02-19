import Navbar from "@/components/Navbar/Navbar";
import AddLinkForm from "@/components/AddLinkForm/AddLinkForm";
import Content from "@/components/Content/Content";
import { useEffect } from "react";
import { RecoilRoot } from "recoil";
import Footer from "@/components/Footer/Footer";

function FolderPage() {
  return (
    <>
      <RecoilRoot>
        <Navbar isSticky />
        <AddLinkForm />
        <Content />
        <Footer />
      </RecoilRoot>
    </>
  );
}

export default FolderPage;
