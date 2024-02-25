export const formatDate = (value: Date) => {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
};

export const afterTimeDate = (value: Date) => {
  const currentDate = new Date();
  const createdDate = new Date(value);
  const diff = currentDate.getTime() - createdDate.getTime();
  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;
  const MONTH = DAY * 30;
  const YEAR = 365 * DAY;

  const diffSec = Math.floor(diff / SECOND);
  const diffMin = Math.floor(diff / MINUTE);
  const diffHour = Math.floor(diff / HOUR);
  const diffDate = Math.floor(diff / DAY);
  const diffMonth = Math.floor(diff / MONTH);
  const diffYear = Math.floor(diff / YEAR);

  if (diff < MINUTE) {
    return `${diffSec} second${diff < SECOND * 2 ? "" : "s"} ago`;
  }
  if (diff < HOUR) {
    return `${diffMin} minute${diff < MINUTE * 2 ? "" : "s"} ago`;
  }
  if (diff < DAY) {
    return `${diffHour} hour${diff < HOUR * 2 ? "" : "s"} ago`;
  }
  if (diff < MONTH) {
    return `${diffDate} day${diff < DAY * 2 ? "" : "s"} ago`;
  }
  if (diff < YEAR) {
    return `${diffMonth} month${diff < 2 * MONTH ? "" : "s"} ago`;
  }
  return `${diffYear} year${diff < YEAR * 2 ? "" : "s"} ago`;
};
