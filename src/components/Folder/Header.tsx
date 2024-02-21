/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { ProfileApi } from "@/pages/folder/folderApiTs";
import { ProfileId } from "@/pages/folder/type";
import Link from "next/link";
// import Image from "next/image";
import * as S from "./Style";

export default function Header() {
  const [profileId, setProfileId] = useState<ProfileId | null>(null);

  const getProfileId = async () => {
    const userProfileId = 1;
    try {
      const userId: ProfileId = await ProfileApi(userProfileId);
      setProfileId(userId);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  useEffect(() => {
    getProfileId();
  }, []);

  return (
    <>
      <S.Nav>
        <S.HeaderLinkBox>
          <Link href="/">
            <img src={"/assets/Icons/logo.svg"} alt="홈 아이콘 이미지" />
          </Link>
          {profileId && (
            <S.ProfileBox>
              <S.ProfileBoxImg
                src={profileId?.data[0].image_source}
                alt="프로필 이미지"
              />
              <S.ProfileName>
                <span>{profileId?.data[0].email || ""}</span>
              </S.ProfileName>
            </S.ProfileBox>
          )}
        </S.HeaderLinkBox>
      </S.Nav>
    </>
  );
}
