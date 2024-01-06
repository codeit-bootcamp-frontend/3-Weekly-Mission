import "./FloatingActionButton.css";
import { useState, useEffect } from "react";
import add from "../../assets/add.svg";

const FloatingActionButton = ({ onClick }) => {
  const [showFab, setShowFab] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setShowFab(screenWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return showFab ? (
    <>
      <button className="fab" onClick={onClick}>
        폴더 추가
      </button>
      <img src={add} className="floating-add-button" alt="add" />
    </>
  ) : null;
};

export default FloatingActionButton;
