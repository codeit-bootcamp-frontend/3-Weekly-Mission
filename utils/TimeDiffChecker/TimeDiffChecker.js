const SECOND = 1;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const MONTH = DAY * 30;

function timeDiffChecker(num) {
  if (num < MINUTE * 2) {
    return `1 minute ago`;
  } else if (num < MINUTE * 59) {
    return `${Math.trunc(num / 60)} minutes ago`;
  } else if (num > MINUTE * 60 && num < DAY) {
    return `${Math.trunc(num / 60 / 60)} hours ago`;
  } else if (num > DAY && num < DAY * 2) {
    return `1 day ago`;
  } else if (num < DAY * 30) {
    return `${Math.trunc(num / 60 / 60 / 24)} days ago`;
  } else if (num >= DAY * 30 && num < DAY * 60) {
    return `1 month ago`;
  } else if (num < MONTH * 12) {
    return `${Math.trunc(num / 60 / 60 / 24 / 30)} months ago`;
  } else if (num >= MONTH * 12 && num < MONTH * 24) {
    return `1 year ago`;
  } else if (num >= MONTH * 24) {
    return `${Math.trunc(num / 60 / 60 / 24 / 30 / 12)} years ago`;
  }
}

export default timeDiffChecker;
