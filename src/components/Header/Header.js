import React from "react";
import NavBar from "./NavBar";
import AddLink from "./AddLink";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <NavBar />
      <AddLink />
    </header>
  );
}
