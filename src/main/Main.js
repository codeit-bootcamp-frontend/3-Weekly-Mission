import { useEffect, useState } from 'react';
import MainSearch from "./MainSearch";
import MainFiles from "./MainFiles";
import {getMyFolders} from './api/myApi'
import {getAllFolders} from './api/allApi'
import { getAlreadyFolders } from './api/folderApi';
import {Title, Buttons} from './buttons';
import Fnc from './fnc';
import addImage from '../img/add.svg';
import { EmptyFile } from './emptyFile';
import './main.css';

function Main() {
  const [folders, setFolders] = useState([]);
  const [load, setLoad] = useState(1);
  const [names, setNames] = useState([]);
  const getMyInfo = async (id) =>{
    const { data } = await getMyFolders(id);
    setFolders(data);
    data.length === 0 ? setLoad(1) : setLoad(2); 
    // [], 빈배열 은 truthy하고 길이는 0 이다.
  }
  const getAllInfo = async () =>{
    const { data } = await getAllFolders();
    setFolders(data);
    setLoad(3);
  }
  const getFolderInfo = async () =>{
    const { data }= await getAlreadyFolders();
    setNames(data);
  }
  useEffect(()=>{
    setLoad(1);
    getFolderInfo();
  },[]);

  const myHandleClick = (e) => {
    if(e.target.innerHTML === '⭐️ 즐겨찾기') {
      getMyInfo(14); 
    }
    if(e.target.innerHTML === '유용한 글') {
      getMyInfo(16); 
    }
    if(e.target.innerHTML === '플리') {
      getMyInfo(17); 
    } 
    if(e.target.innerHTML === '신규 폴더1') {
      getMyInfo(24); 
    }
    if(e.target.innerHTML === '채용 사이트') {
      getMyInfo(40); 
    }
    if(e.target.innerHTML === '명동 맛집') {
      getMyInfo(168); 
    }
    if(e.target.innerHTML === '유튭') {
      getMyInfo(285); 
    }
        
  }
  const myAllClick = ()=> {
    getAllInfo();
  }
  // isLoad의 숫자를 통해 파일을 불러오고 있다 
  // 1이면 빈 데이터 
  // 2이면 즐겨찾기 데이터 -> 같은 api를 호출하지만 다른 파일을 불러오게 하기 위해서는?
  // 데이터가 없으면 없다고 출력 
  // 3이면 전체 데이터
  return (
    <div className="Main">
      <div className="box">
        <div className="item01">
          <MainSearch />
        </div>
        <div className="item02">
        <div className='buttons'>
        <div className="onlyBtn">
        <button className="oneBtn" onClick={myAllClick}>
        <div className='text'>{'전체'}</div>
        </button>
        <Buttons onClick={myHandleClick} folders={names}/>
        </div>
      <img src={addImage} alt="" />
    </div>
    <div className='title'>
      <div>임시.상태변경 타이틀</div>
      {/* 상태 공유를 하면서 상태에 따라 텍스트 변경 */}
      <div className='fnc-btn'>
        <Fnc value="공유"/>
        <Fnc value="이름변경"/>
        <Fnc value="삭제"/>
      </div>
    </div>
          {load === 1 && <EmptyFile/>}
          {load === 2 && <MainFiles folders={folders}/>}
          {load === 3 && <MainFiles folders={folders}/>}
        </div>
      </div>
    </div>
  )
}

export default Main;