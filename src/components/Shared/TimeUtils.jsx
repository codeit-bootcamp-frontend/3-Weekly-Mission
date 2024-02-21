export function formatDateString(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function calcTime(dateString) {
  const currentDate = new Date();
  const targetDate = new Date(dateString);

  const timeDiff = currentDate - targetDate;
  const Minutes = Math.floor(timeDiff / (1000 * 60));

  return Minutes;
}
