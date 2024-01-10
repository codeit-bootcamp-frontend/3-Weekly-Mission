const formatDate = (value) => {
  const splitValue = value.split("T");
  const dateValue = splitValue[0];
  return dateValue.split("-").join(".");
};

const timeStamp = (date) => {
  const now = new Date();
  const createdAt = new Date(date);

  const seconds = Math.floor((now - createdAt) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (seconds < 120) {
    return "1 minute ago";
  }
  if (minutes < 60) {
    return `${minutes} minutes ago`;
  }
  if (hours < 2) {
    return "1 hour ago";
  }
  if (hours < 24) {
    return `${hours} hours ago`;
  }
  if (days < 2) {
    return "1 day ago";
  }
  if (days < 31) {
    return `${days} days ago`;
  }
  if (months < 2) {
    return "1 month ago";
  }
  if (months < 12) {
    return `${months} months ago`;
  }
  if (years < 2) {
    return "1 year ago";
  }

  return `${Math.floor(months / 12)} years ago`;
};

const isValidEmail = (email) => {
  return email !== "" && email !== undefined && email !== null;
};

export { formatDate, timeStamp, isValidEmail };
