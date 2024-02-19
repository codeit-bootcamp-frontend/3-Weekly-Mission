export default function timeElapsedCalculate(date: Date){
  const diff = Date.now() - date.getTime();

  const seconds = diff / 1000; // 초
  const minutes = seconds / 60; // 분
  const hours = minutes / 60; // 시
  const days = hours / 24; // 일
  const months = days / 30.4; // 월
  const years = months / 12; // 년

  let timeElapsed;

  if (minutes < 2) {
    timeElapsed = '1 minute';
  } else if (minutes < 60) {
    timeElapsed = `${Math.floor(minutes)} minutes`;
  } else if (hours >= 1 && hours < 2) {
    timeElapsed = '1 hour';
  } else if (hours < 24) {
    timeElapsed = `${Math.floor(hours)} hours`;
  } else if (days >= 1 && days < 2) {
    timeElapsed = '1 day';
  } else if (days < 30.4) {
    timeElapsed = `${Math.floor(days)} days`;
  } else if (months >= 1 && months < 2) {
    timeElapsed = '1 month';
  } else if (months < 12) {
    timeElapsed = `${Math.floor(months)} months`;
  } else if (years >= 1 && years < 2) {
    timeElapsed = '1 year';
  } else {
    timeElapsed = `${Math.floor(years)} years`;
  }

  return timeElapsed;
}