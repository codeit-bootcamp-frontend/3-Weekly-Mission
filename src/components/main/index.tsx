import React, { useEffect, useState } from "react";
import MainSearch from "components/main/MainSearch";
import { MainFiles } from "components/main/MainFiles";
import { getLinks, getMyFolders } from "components/main/api/Api";
import { Buttons } from "components/main/buttons";
import Fnc from "components/main/fnc";
import AddFolder from "components/main/addFolder";
import { EmptyFile } from "components/main/emptyFile";
import "components/main/main.css";
import { MyFolders, Link, CurrentFolder } from "types";

function Main() {
  const [links, setLinks] = useState<Link[]>([]); // Link[] 타입으로 변경
  const [search, setSearch] = useState<string>("");
  const [currentFolder, setCurrentFolder] = useState<CurrentFolder>({
    id: null,
    name: "전체",
  });
  const [folders, setFolders] = useState<MyFolders[]>([]);

  const getLink = async (id: CurrentFolder["id"]) => {
    try {
      const { data } = await getLinks(id);
      setLinks(data);
    } catch (error) {
      console.error("Error fetching links:", error);
    }
  };
  
  const getFilteredLink = async (id: CurrentFolder["id"]) => {
    try {
      const { data } = await getLinks(id);
      const filteredData = data.filter((info)=> {
        return info.url?.toLowerCase().includes(search.toLowerCase()) ||
        info.title?.toLowerCase().includes(search.toLowerCase()) ||
        info.description?.toLowerCase().includes(search.toLowerCase())
      })
        if(!search) {
          setLinks(data)
        } else if (search) {
          setLinks(filteredData)
        }
        
    } catch (error) {
      console.error("Error fetching links:", error);
    }
  };

  const getFolderList = async () => {
    try {
      const { data } = await getMyFolders();
      console.log(data);
      setFolders(data);
    } catch (error) {
      console.error("Error fetching folders:", error);
    }
  };

  useEffect(() => {
    getFolderList();
  }, []);

  useEffect(() => {
    getLink(currentFolder.id);
  }, [currentFolder]);

  useEffect(() => {
    getFilteredLink(currentFolder.id);
  }, [search]);

  const handleClickFolder = (folder?: CurrentFolder): void => {
    if (folder) {
      setCurrentFolder(folder);
    }
  };

  return (
    <div className="Main">
      <div className="box">
        <div className="item01">
          <MainSearch setSearch={setSearch} />
        </div>
        <div className="item02">
          <div className="fileList">
            <div className="buttonBundle">
              <button
                className="list-all-button"
                onClick={() => handleClickFolder({ id: null, name: "전체" })}
              >
                <div className="text">{"전체"}</div>
              </button>
              <Buttons onClick={handleClickFolder} folders={folders} />
            </div>
            <AddFolder />
          </div>
          <div className="functionBundle">
            <div>{currentFolder.name}</div>
            {currentFolder.name !== "전체" && (
              <div className="fnc-btn">
                <Fnc value="공유" />
                <Fnc value="이름변경" />
                <Fnc value="삭제" />
              </div>
            )}
          </div>
          {links.length === 0 ? <EmptyFile /> : <MainFiles folders={links} />}{" "}
          {/* MainFiles 컴포넌트에 links props 전달 */}
        </div>
      </div>
    </div>
  );
}

export default Main;
