/* eslint-disable @next/next/no-img-element */
import { ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"img"> {
  showPassword: boolean;
}

export default function EyeIcon({ showPassword, ...props }: Props) {
  return (
    <img
      src={
        showPassword ? "/assets/Icons/eye-on.svg" : "/assets/Icons/eye-off.svg"
      }
      alt={showPassword ? "눈 열린 아이콘 이미지" : "눈 닫힌 아이콘 이미지"}
      {...props}
    />
  );
}
