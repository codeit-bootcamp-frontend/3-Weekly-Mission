import Image from "next/image";
import { MouseEvent, ReactNode } from "react";

type ImageButtonProps = {
  children?: ReactNode;
  className?: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  value?: string;
  onClick: (e?: MouseEvent<HTMLButtonElement | MouseEvent>) => void;
};

export default function ImageButton({
  children,
  className,
  src,
  alt,
  width,
  height,
  value,
  onClick,
}: ImageButtonProps) {
  return (
    <button className={className} onClick={onClick} value={value}>
      <Image src={src} width={width} height={height} alt={alt} />
      {children}
    </button>
  );
}
