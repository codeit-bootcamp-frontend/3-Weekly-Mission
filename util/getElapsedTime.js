import { TIME_IN_MILLISECONDS } from './constant';

export const getElapsedTime = (createdAt) => {
  const now = new Date();
  const createdAtDate = new Date(createdAt);
  const elapsedTime = now - createdAtDate;
  const { MINUTE, HOUR, DAY, MONTH, YEAR } = TIME_IN_MILLISECONDS;

  if (YEAR * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / YEAR)} years ago`;
  }
  if (YEAR <= elapsedTime) {
    return `1 year ago`;
  }
  if (MONTH * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / MONTH)} months ago`;
  }
  if (MONTH <= elapsedTime) {
    return `1 month ago`;
  }
  if (DAY * 2 <= elapsedTime) {
    return `{Math.floor(elapsedTime / day)} days ago`;
  }
  if (DAY <= elapsedTime) {
    return `1 day ago`;
  }
  if (HOUR * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / HOUR)} hours ago`;
  }
  if (HOUR <= elapsedTime) {
    return `1 hour ago`;
  }
  if (MINUTE * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / MINUTE)} minutes ago`;
  }
  return `1 minute ago`;
};
