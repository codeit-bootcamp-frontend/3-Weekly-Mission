import Image from "next/image";
import Link from "next/link";
import linkbrary from "./linkbrary.svg";

const BigGoMainLogo = () => {
  return (
    <Link href="/">
      <Image
        src={linkbrary}
        width={250}
        height={45}
        alt="linkbrary 로고 이미지"
      />
    </Link>
  );
};

export default BigGoMainLogo;
