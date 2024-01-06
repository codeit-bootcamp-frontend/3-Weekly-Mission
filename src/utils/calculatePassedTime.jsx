const calculatePassedTime = (createdAt) => {
  const nowTime = Date.now();
  const uploadedTime = new Date(createdAt).getTime();
  const passedSeconds = Math.floor((nowTime - uploadedTime) / 1000);
  const passedMinutes = passedSeconds / 60;
  const passedHours = passedMinutes / 60;
  const passedDay = passedHours / 24;
  const passedMonth = passedDay / 30;
  const passedYear = passedMonth / 12;
  // 큰 단위부터 하나씩 컷하기
  if (passedYear >= 1) {
    return `${Math.floor(passedYear)} years ago`;
  }
  if (passedMonth >= 1) {
    return `${Math.floor(passedMonth)} months ago`;
  }
  if (passedDay >= 1) {
    return `${Math.floor(passedDay)} days ago`;
  }
  if (passedHours >= 1) {
    return `${Math.floor(passedHours)} hours ago`;
  }
  if (passedMinutes >= 1) {
    return `${Math.floor(passedMinutes)}minutes ago`;
  }
  return '1minutes ago';
};

export default calculatePassedTime;
