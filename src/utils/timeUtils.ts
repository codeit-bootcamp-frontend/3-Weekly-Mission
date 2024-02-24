export function createDay(createAt: string): string {
  const date = new Date(createAt);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}.${month}.${day}`;
}

export function createTime(createdTime: string): string {
  const currentDate: Date = new Date();
  const createdDate: Date = new Date(createdTime);
  const timeDifference: number = Math.floor(
    (currentDate.getTime() - createdDate.getTime()) / (60 * 1000)
  ); // 분 단위 //

  const minutes = Math.floor(timeDifference / (1000 * 60));
  const hours = Math.floor(timeDifference / 60); //
  const days = Math.floor(timeDifference / (60 * 24));
  const months = Math.floor(timeDifference / (60 * 24 * 30));
  const years = Math.floor(timeDifference / (60 * 24 * 30 * 12));

  if (timeDifference < 2) {
    return `${minutes} minute ago`;
  }
  if (timeDifference < 59) {
    return `${minutes} minutes ago`;
  }
  if (timeDifference < 60 * 24) {
    return `${hours} hours ago`;
  }
  if (timeDifference < 60 * 24 * 30) {
    return `${days} days ago`;
  }
  if (timeDifference < 60 * 24 * 30 * 12) {
    return `${months} months ago`;
  }
  return `${years} years ago`;
}
