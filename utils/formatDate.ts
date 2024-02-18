export default function formatDate(date: string) {
  const formattedDate = new Date(date);
  return `${formattedDate.getFullYear()}. ${
    formattedDate.getMonth() + 1
  }. ${formattedDate.getDate()}`;
}
