const formatDate = (time: string | number | Date) => {
  const createdAt = new Date(time);

  const formatted = new Intl.DateTimeFormat('ko').format(createdAt);

  return formatted;
};

export { formatDate };
