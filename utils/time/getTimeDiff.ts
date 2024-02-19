const getTimeDiff = (time: string | number | Date) => {
  const currentTime = Date.now();
  const createdAt = new Date(time).getTime();

  const timeDiffInMs = Math.abs(currentTime - createdAt);
  const timeDiffInMin = Math.floor(timeDiffInMs / 1000 / 60);

  if (timeDiffInMin < 2) return '1 minute ago';

  if (timeDiffInMin <= 59) return `${timeDiffInMin.toString().padStart(2, '0')} minutes ago`;

  const timeDiffInHour = Math.floor(timeDiffInMin / 60);

  if (timeDiffInMin <= 60 || timeDiffInHour === 1) return '1 hour ago';

  if (timeDiffInHour <= 23) return `${timeDiffInHour.toString().padStart(2, '0')} hours ago`;

  if (timeDiffInHour <= 24) return '1 day ago';

  const timeDiffInDay = Math.floor(timeDiffInHour / 24);

  if (timeDiffInDay <= 30) return `${timeDiffInDay.toString().padStart(2, '0')} days ago`;

  const timeDiffInMonth = Math.floor(timeDiffInDay / 31);

  if (timeDiffInDay <= 31 || timeDiffInMonth === 1) return '1 month ago';

  if (timeDiffInMonth <= 11) return `${timeDiffInMonth.toString().padStart(2, '0')} months ago`;

  const timeDiffInYear = Math.floor(timeDiffInMonth / 12);

  if (timeDiffInMonth <= 12 || timeDiffInYear === 1) return '1 year ago';

  return `${timeDiffInYear.toString().padStart(2, '0')} years ago`;
};

export { getTimeDiff };
