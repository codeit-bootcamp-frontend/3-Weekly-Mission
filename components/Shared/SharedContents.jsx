import React from 'react';
import SearchInput from "../Forms/SearchArea";
import SharedContainer from "./SharedContainer";

const SharedContents = ({data}) => {
  return (
      <div className="contents-folder">
        <SearchInput/>
        <SharedContainer folder={data}/>
      </div>
  );
}
export default SharedContents;
