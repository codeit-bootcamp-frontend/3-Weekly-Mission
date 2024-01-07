function DateDiff(createdAt) {
  const createdDate = new Date(createdAt);
  const currentDate = new Date();

  const secondDiff = Math.floor((currentDate - createdDate) / 1000);

  if (secondDiff < 60) {
    return "1 minute ago";
  } else if (secondDiff < 3600) {
    const minuteDiff = Math.floor(secondDiff / 60);
    return `${minuteDiff} minutes ago`;
  } else if (secondDiff < 3600 * 24) {
    const hourDiff = Math.floor(secondDiff / 3600);
    return hourDiff === 1 ? "1 hour ago" : `${hourDiff} hours ago`;
  } else if (secondDiff < 3600 * 24 * 30) {
    const dayDiff = Math.floor(secondDiff / (3600 * 24));
    return dayDiff === 1 ? "1 day ago" : `${dayDiff} days ago`;
  } else if (secondDiff < 3600 * 24 * 30 * 12) {
    const monthDiff = Math.floor(secondDiff / (3600 * 24 * 30));
    return monthDiff === 1 ? "1 month ago" : `${monthDiff} months ago`;
  } else {
    const yearDiff = Math.floor(secondDiff / (3600 * 24 * 30 * 12));
    const remainMonth = Math.floor(
      (secondDiff % (3600 * 24 * 30 * 12)) / (3600 * 24 * 30)
    );
    const oneYearOver = remainMonth === 0 ? yearDiff : yearDiff + 1;
    return oneYearOver === 1 ? "1 year ago" : `${oneYearOver} years  ago`;
  }
}

function showCreatedAt(createdAt) {
  const createdDate = new Date(createdAt);
  const year = createdDate.getFullYear();
  const month = createdDate.getMonth() + 1; // 0부터 시작 조심
  const day = createdDate.getDate();
  const showDate = `${year}. ${month}. ${day}`;
  return showDate;
}

export { DateDiff, showCreatedAt };
