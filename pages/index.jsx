import * as S from '../styles/Home.style';
export default function Home() {
  return (
      <S.Main>
        <section className="contents-header">
          <p className="text">
            <a className="text-gradation-type-head">세상의 모든 정보</a>를 <br/>
            쉽게 저장하고 관리해 보세요
          </p>
          <p className="button">링크 추가하기</p>
          <img src="/images/main-screenshot1.png" alt="screenshot_1"/>
        </section>

        <section className="features-container">
          <article className="feature">
            <div className="feature-box">
              <div className="feature-text">
                <p className="text-subject">
                  <a className="text-gradation-type-a"> 원하는 링크</a>를<br/>
                  저장하세요.
                </p>
                <p className="text-content">
                  나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고 싶은 모든 것을 한 공간에 저장하세요.
                </p>
              </div>
              <img className="screenshot-content"
                   src="/images/main-screenshot2.png" alt="article_screenshot"/>
            </div>
          </article>
          <article className="feature">
            <div className="feature-box">
              <div className="screenshot-content">
                <img className="folder-popup" src="/images/main-screenshot3.png"
                     alt="article_screenshot"/>
              </div>
              <div className="feature-text">
                <p className="text-subject">
                  링크를 폴더로<br/>
                  <a className="text-gradation-type-b"> 관리</a>해보세요
                </p>
                <p className="text-content">
                  나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.
                </p>
              </div>
            </div>
          </article>
          <article className="feature">
            <div className="feature-box">
              <div className="feature-text">
                <p className="text-subject">
                  저장한 링크를<br/>
                  <a className="text-gradation-type-c"> 공유</a>해보세요
                </p>
                <p className="text-content">
                  나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고 싶은 모든 것을 한 공간에 저장하세요.
                </p>
              </div>
              <div className="screenshot-content">
                <img className="screenshot-content"
                     src="/images/main-screenshot4_popup.png"
                     alt="article_screenshot"/>
                <img className="share-popup"
                     src="/images/main-screenshot4.png"
                     alt="screenshot_popup"/>
              </div>
            </div>
          </article>
          <article className="feature">
            <div className="feature-box">
              <div className="screenshot-content">
                <img className="screenshot-search"
                     src="/images/main-screenshot5.png"
                     alt="article-screenshot-search"/>
              </div>
              <div className="feature-text">
                <p className="text-subject">
                  저장한 링크를<br/>
                  <a className="text-gradation-type-d"> 검색</a>해보세요<br/>
                </p>
                <p className="text-content">
                  중요한 정보들을 검색으로 쉽게 찾아보세요. </p>
              </div>
            </div>
          </article>
        </section>
      </S.Main>
  );
}
