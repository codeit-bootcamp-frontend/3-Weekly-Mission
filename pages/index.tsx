import Link from "next/link";
import * as S from "./Home.style";
import ResponsiveImage from "@/components/common/ResponsiveImage/ResponsiveImage";

export default function Home() {
  return (
    <>
      <S.Header>
        <S.Title>
          <S.Highlight>세상의 모든 정보</S.Highlight>를 <br />
          쉽게 저장하고 관리해 보세요
        </S.Title>
        <S.Button>
          <Link href="/folder">링크 추가하기</Link>
        </S.Button>
        <S.ImageBox>
          <ResponsiveImage
            src={"/assets/Images/home-img.png"}
            alt="홈 페이지 첫번째 이미지"
          />
        </S.ImageBox>
      </S.Header>

      <S.Section>
        <S.Content>
          <S.Article1>
            <S.SectionTitle>
              <S.SectionHighlight>원하는 링크</S.SectionHighlight>를 <br />{" "}
              저장하세요
            </S.SectionTitle>
            <S.Description>
              나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고
              싶은 모든 것을 한 공간에 저장하세요.
            </S.Description>
          </S.Article1>
        </S.Content>
        <S.Image1>
          <ResponsiveImage
            src={"/assets/Images/home-img1.png"}
            alt="섹션에 해당하는 첫번째 이미지"
          />
        </S.Image1>
        <S.Image2>
          <ResponsiveImage
            src={"/assets/Images/home-img2.png"}
            alt="섹션에 해당하는 두번째 이미지"
          />
        </S.Image2>

        <S.Article2>
          <S.SectionTitle>
            링크를 폴더로
            <br /> <S.SectionHighlight1>관리</S.SectionHighlight1>하세요
          </S.SectionTitle>
          <S.Description>
            나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.
          </S.Description>
        </S.Article2>

        <S.Article3>
          <S.SectionTitle>
            저장한 링크를
            <br />
            <S.SectionHighlight2>공유</S.SectionHighlight2>해보세요
          </S.SectionTitle>
          <S.Description>
            여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게
            쉽고 빠르게 링크를 공유해 보세요.
          </S.Description>
        </S.Article3>
        <S.Image3>
          <ResponsiveImage
            src={"/assets/Images/home-img3.png"}
            alt="섹션에 해당하는 세번째 이미지"
          />
        </S.Image3>
        <S.Image4>
          <ResponsiveImage
            src={"/assets/Images/home-img4.png"}
            alt="섹션에 해당하는 네번째 이미지"
          />
        </S.Image4>

        <S.Article4>
          <S.SectionTitle>
            저장한 링크를
            <br /> <S.SectionHighlight3>검색</S.SectionHighlight3>해보세요
          </S.SectionTitle>
          <S.Description>
            중요한 정보들을 검색으로 쉽게 찾아보세요.
          </S.Description>
        </S.Article4>
      </S.Section>
    </>
  );
}
