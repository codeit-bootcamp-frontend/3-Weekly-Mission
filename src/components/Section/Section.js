import React from "react";
import { useState } from "react";
import SearchLink from "./SearchLink";
import SortedFolder from "./SortedFolder";
import EditFolder from "./EditFolder";
import Card from "./Card";

export default function Section() {
  const [selected, setSelected] = useState("$1");
  const selectFunc = (folder) => {
    setSelected(folder);
  };

  return (
    <section>
      <SearchLink />
      <div className="contents">
        <SortedFolder focusedOn={selectFunc} selected={selected} />
        <EditFolder selected={selected} />
        <Card selected={selected} />
      </div>
    </section>
  );
}
