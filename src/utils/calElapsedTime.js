export function calElapsedTime(createdAt) {
  const currentDate = new Date();
  const createdDate = new Date(createdAt);
  const timeDiff = Math.floor((currentDate - createdDate) / (60 * 1000));
  let elapsedTime = "";

  if (timeDiff < 2) {
    elapsedTime = "1 minute ago";
  }
  if (timeDiff <= 59) {
    elapsedTime = `${timeDiff} minutes ago`;
  }
  if (timeDiff >= 60) {
    elapsedTime = "1 hour ago";
  }
  if (timeDiff < 60 * 24) {
    let hours = Math.floor(timeDiff / 60);
    elapsedTime = `${hours} hours ago`;
  }
  if (timeDiff >= 60 * 24) {
    elapsedTime = "1 day ago";
  }
  if (timeDiff <= 60 * 24 * 30) {
    let days = Math.floor(timeDiff / (60 * 24));
    elapsedTime = `${days} days ago`;
  }
  if (timeDiff > 60 * 24 * 30) {
    elapsedTime = "1 month ago";
  }
  if (timeDiff < 60 * 24 * 30 * 12) {
    let months = Math.floor(timeDiff / (60 * 24 * 30));
    elapsedTime = `${months} months ago`;
  }
  if (timeDiff >= 60 * 24 * 30 * 12) {
    elapsedTime = "1 year ago";
  }
  if (timeDiff >= 60 * 24 * 30 * 24) {
    let years = Math.floor(timeDiff / (60 * 24 * 30 * 12));
    elapsedTime = `${years} years ago`;
  }

  return elapsedTime;
}
