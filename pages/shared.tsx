import Navbar from "@/components/Navbar/Navbar";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Content from "@/components/Content/Content";
import { RecoilRoot } from "recoil";

export default function SharedLinkPage() {
  return (
    <>
      <RecoilRoot>
        <Navbar />
        <Header></Header>
        <Content />
        <Footer />
      </RecoilRoot>
    </>
  );
}
