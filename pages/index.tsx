import Link from "next/link";
import ResponsiveImage from "@/components/common/ResponsiveImage/ResponsiveImage";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <header className={styles["header"]}>
        <h1 className="title">
          <span className={styles["highlight"]}>세상의 모든 정보</span>를 <br />
          쉽게 저장하고 관리해 보세요
        </h1>
        <button className={styles["link-button"]}>
          <Link href="/folder">링크 추가하기</Link>
        </button>
        <div className={styles["top-image"]}>
          <ResponsiveImage
            src={"/assets/Images/home-img.png"}
            alt="홈 페이지 첫번째 이미지"
          />
        </div>
      </header>

      <section className={styles["container"]}>
        <div className={styles["content"]}>
          <article className={styles["article"]} id={styles["article1"]}>
            <h3 className={styles["section-title"]}>
              <span className={styles["section-highlight1"]}>원하는 링크</span>
              를 <br /> 저장하세요
            </h3>
            <p className={styles["description"]}>
              나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고
              싶은 모든 것을 한 공간에 저장하세요.
            </p>
          </article>
        </div>
        <div className={styles["image"]} id={styles["image1"]}>
          <ResponsiveImage
            src={"/assets/Images/home-img1.png"}
            alt="섹션에 해당하는 첫번째 이미지"
          />
        </div>
        <div className={styles["image"]} id={styles["image2"]}>
          <ResponsiveImage
            src={"/assets/Images/home-img2.png"}
            alt="섹션에 해당하는 두번째 이미지"
          />
        </div>

        <article className={styles["article"]} id={styles["article2"]}>
          <h3 className={styles["section-title"]}>
            링크를 폴더로
            <br /> <span className={styles["section-highlight2"]}>관리</span>
            하세요
          </h3>
          <p className={styles["description"]}>
            나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.
          </p>
        </article>

        <article className={styles["article"]} id={styles["article3"]}>
          <h3 className={styles["section-title"]}>
            저장한 링크를
            <br />
            <span className={styles["section-highlight3"]}>공유</span>해보세요
          </h3>
          <p className={styles["description"]}>
            여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게
            쉽고 빠르게 링크를 공유해 보세요.
          </p>
        </article>
        <div className={styles["image"]} id={styles["image3"]}>
          <ResponsiveImage
            src={"/assets/Images/home-img3.png"}
            alt="섹션에 해당하는 세번째 이미지"
          />
        </div>
        <div className={styles["image"]} id={styles["image4"]}>
          <ResponsiveImage
            src={"/assets/Images/home-img4.png"}
            alt="섹션에 해당하는 네번째 이미지"
          />
        </div>

        <article className={styles["article"]} id={styles["article4"]}>
          <h3 className={styles["section-title"]}>
            저장한 링크를
            <br /> <span className={styles["section-highlight4"]}>검색</span>
            해보세요
          </h3>
          <p className={styles["description"]}>
            중요한 정보들을 검색으로 쉽게 찾아보세요.
          </p>
        </article>
      </section>
    </>
  );
}
