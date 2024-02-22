import Image from "next/image";
import React from "react";
import styled from "styled-components";

interface Props {
  type: string;
  imageSource: string;
  altContent: string;
}

export default function ModalShareLinkIcon({
  type,
  imageSource,
  altContent,
}: Props) {
  return (
    <LinkIconBackground type={type}>
      <Image width={18} height={18} src={imageSource} alt={altContent} />
    </LinkIconBackground>
  );
}

const TYPE: { [key: string]: string } = {
  kakao: "#FEE500",
  facebook: "#1877F2",
  link: "rgba(157, 157, 157, 0.04)",
};

interface BgType {
  type: string;
}

const LinkIconBackground = styled.div<BgType>`
  position: relative;
  background-color: ${(props) => TYPE[props.type]};
  border-radius: 37.333px;
  padding: 12px;
`;
