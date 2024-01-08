export default function formatDate(date) {
  const formattedDate = new Date(date);
  return `${formattedDate.getFullYear()}. ${
    formattedDate.getMonth() + 1
  }. ${formattedDate.getDate()}`;
}
