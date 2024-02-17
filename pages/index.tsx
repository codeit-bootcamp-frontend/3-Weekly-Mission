import Navbar from "@/components/Navbar/Navbar";
import { RecoilRoot } from "recoil";

function Home() {
  return (
    <>
      <RecoilRoot>
        <Navbar isSticky />
        <div>홈페이지입니다</div>
      </RecoilRoot>
    </>
  );
}

export default Home;
