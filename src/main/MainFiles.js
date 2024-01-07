import { useState } from 'react';
import TimeAgo from './MainFileTimeAgo';
import STAR_IMAGE from '../img/star.svg';
import KEBAB_IMAGE from '../img/kebab.svg';
const TEMP_IMAGE = 'https://s3-alpha-sig.figma.com/img/7f74/ead6/eb1ccd75abb3bcb7fbda1536cf0718ab?Expires=1704672000&Signature=LiCmhbMFxPcHwHM~eunm~GUqamXyo6dqYjN6VHI5l4e2DAZIn99n0w4cLbS~aTKGgrbgBee2CX8y9Bh0sAaDRe0JX5erbHDrLwAKp6CElf1NIZjvsxtk9VCgEoBFnNA-stzLMmV79kdwV8TUupeXMzf~4XZImr3-VjA5bgfjhm51tGF2YTKmKh1YsvIZ3jrj7DwHi6Zfg6mMYVFMDhG6cBW8AjzgIVf3njiImPKo5k1y5m0k4NMF-o9E7jzkk1raemYMaTeNjcanw31oEjR0K7aFwtC9YzEd0aH0mNH72xjpKFyrep1tKNo2JLoNCiUaSSwIG-EfNVAy7NJH0h87Qg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4';

function File({file}) {
  let year;
  let month;
  let date;
  let editedTime;
  if(10 < file.id){ // 전체 데이터
    const {id, created_at, url, title, description, image_source} = file;
    const handleClick = function(){
      window.open(url, '_blank');
    }

    year = new Date(created_at).getFullYear();
    month = new Date(created_at).getMonth();
    date = new Date(created_at).getDate();
    editedTime = year + '-' + (month+1) + '-' + date;
    return (
      <div className='File' onClick={handleClick}>
    <div className='item01'>
      <img src={image_source === null ? TEMP_IMAGE : image_source} alt={title} />
    </div>
    <div className='item02'>
    <img className="kebab" src={KEBAB_IMAGE} alt="" />
      <TimeAgo className='timeAgo' time={created_at}/>
       <div className='description'>{description}</div>
       <div className='editTime'>{editedTime}</div>
    </div>
    </div>
    )
  } else { //즐겨찾기 데이터 
    const { url, title, description, imageSource, createdAt } = file
    const handleClick = function(){
    window.open(url, '_blank');
  }
  year = new Date(createdAt).getFullYear();
  month = new Date(createdAt).getMonth();
  date = new Date(createdAt).getDate();
  editedTime = year + '-' + (month+1) + '-' + date;

  return (
    <div className='File' onClick={handleClick}>
    <img className='star' src={STAR_IMAGE} alt="" />
    <div className='item01'>
      <img src={imageSource === undefined ? TEMP_IMAGE : imageSource} alt={title} />
    </div>
    <div className='item02'>
      <img className="kebab" src={KEBAB_IMAGE} alt="" /> 
      <TimeAgo className='timeAgo' time={createdAt}/>
       <div className='description'>{description}</div>
       <div className='editTime'>{editedTime}</div>
    </div>
    </div>
  )
  }
}

export default function MainFiles({folders}) {
    return (
      <div className='MainFiles'>
      <div className='files'>
      {folders.map((folder) => <File file={folder}/>)} 
      </div>
      </div>
    )
}