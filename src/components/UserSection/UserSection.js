import "./UserSection.css";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import timeDiffChecker from "../../utils/TimeDiffChecker/TimeDiffChecker";
import { todayIs } from "../../utils/TodayIs/TodayIs";
import { CODEIT_API } from "../../assets/url";
import logo from "../../assets/logo.svg";
import pen from "../../assets/pen.svg";
import share from "../../assets/share.svg";
import remove from "../../assets/delete.svg";
import add from "../../assets/add.svg";
import { useNavigate } from "react-router-dom";

function UserSection() {
  const [cardInfo, setCardInfo] = useState([]);
  const [buttonInfo, setButtonInfo] = useState([]);
  const [selectedButton, setSelectedButton] = useState("전체");
  const [filterdData, setFilteredData] = useState([]);
  const style = {};
  const logoStyle = {
    opacity: "0.2",
    width: "133px",
    height: "24px",
  };
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseFolders = await fetch(`${CODEIT_API}/users/1/folders`);
        const folderData = await responseFolders.json();

        if (folderData["data"].length === 0) {
          navigate("/folderEmpty");
          return;
        }

        const responseLinks = await fetch(`${CODEIT_API}/users/1/links`);
        const linkData = await responseLinks.json();

        setButtonInfo(folderData["data"]);
        setCardInfo(linkData["data"]);
        setFilteredData(linkData["data"]);
      } catch (error) {
        console.error("데이터를 불러오는 중 오류 발생:", error);
      }
    };
    fetchData();
  }, [navigate]);

  if (!buttonInfo && !cardInfo) {
    return null;
  }

  const handleButtonClick = (name) => {
    setSelectedButton(name);
  };

  const handleFilter = (category) => {
    if (category === "전체") {
      setFilteredData(cardInfo);
    } else {
      const filterd = cardInfo.filter((item) => item["folder_id"] === category);
      setFilteredData(filterd);
    }
  };

  const timeDiffs = cardInfo.map((item) => {
    const today = new Date();
    const linkedDay = new Date(item.created_at);
    return Math.floor((today - linkedDay) / 1000);
  });

  return (
    <>
      <nav>
        <div className="button-button-area">
          <button
            onClick={() => {
              handleButtonClick("전체");
              handleFilter("전체");
            }}
            className={`${selectedButton === "전체" ? "selected" : ""}`}
          >
            전체
          </button>
          {buttonInfo.map((item) => (
            <button
              onClick={() => {
                handleButtonClick(item.name);
                handleFilter(item.id);
              }}
              key={item.id}
              className={item.name === selectedButton ? "selected" : ""}
            >
              {item.name}
            </button>
          ))}
        </div>
        <img src={add} alt="add" className="add-button" />
        <div className="button-text-area">
          <p>{selectedButton}</p>
          <div
            className={`tool-box ${selectedButton === "전체" ? "hidden" : ""}`}
          >
            <a href="#!">
              <img src={share} alt="share" />
              공유
            </a>
            <a href="#!">
              <img src={pen} alt="pen" />
              이름 변경
            </a>
            <a href="#!">
              <img src={remove} alt="delete" />
              삭제
            </a>
          </div>
        </div>
      </nav>
      <section>
        <div className="div-card">
          {filterdData.map((cardData, index) => (
            <a
              rel="noreferrer"
              href={cardData.url}
              target={"_blank"}
              key={cardData.id}
            >
              <Card
                style={cardData.image_source !== null ? style : logoStyle}
                image={
                  cardData.image_source !== null ? cardData.image_source : logo
                }
                createdAt={timeDiffChecker(timeDiffs[index])}
                description={cardData.description}
                uploadDate={todayIs()}
              />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

export default UserSection;
