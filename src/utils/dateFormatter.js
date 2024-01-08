export function formatDate(input) {
  const date = new Date(input);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

export function calculateTimeDifference(input) {
  const targetDate = new Date(input);
  const currentDate = new Date();
  const timeDifference = currentDate - targetDate;

  const minutes = Math.floor(timeDifference / (60 * 1000));
  const hours = Math.floor(timeDifference / (60 * 60 * 1000));
  const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
  const months = Math.floor(timeDifference / (31 * 24 * 60 * 60 * 1000));
  const years = Math.floor(timeDifference / (365 * 24 * 60 * 60 * 1000));

  if (years) {
    return years === 1 ? "1 year ago" : `${years} years ago`;
  }
  if (months) {
    return months === 1 ? "1 month ago" : `${months} months ago`;
  }
  if (days) {
    return days === 1 ? "1 day ago" : `${days} days ago`;
  }
  if (hours) {
    return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
  }
  return minutes > 1 ? `${minutes} minutes ago` : "1 minute ago";
}
