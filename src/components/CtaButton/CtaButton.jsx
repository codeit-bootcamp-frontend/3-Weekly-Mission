import React from "react";
import styled from "./CtaButton.module.css";

export default function CtaButton({ children }) {
  return (
    <button className={styled.button}>
      <span>{children}</span>
    </button>
  );
}
