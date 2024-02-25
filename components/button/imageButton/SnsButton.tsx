import Image from "next/image";
import Link from "next/link";

type SnsButtonProps = {
  href: string;
  src: string;
  alt: string;
};

export default function SnsButton({ href, src, alt }: SnsButtonProps) {
  return (
    <Link target="_blank" href={href}>
      <Image src={src} width="18" height="18" alt={alt} />
    </Link>
  );
}
