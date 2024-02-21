import Folder from "@/components/Folder/Folder";
import Input from "@/components/common/input";

export default function Home() {
  return (
    <>
      <Input type="text" placeholder="내용 입력" />
      <Input type="password" placeholder="비밀번호 입력" />
      <Folder />
    </>
  );
}
