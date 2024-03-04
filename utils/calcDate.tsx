export default function calcDate(value: string = "") {
  const current = new Date();
  const createdDate = new Date(value);
  const subCalc = (time: number, condition: number, unit: string) => {
    if (time < 2) {
      return `1${unit} ago`;
    } else if (time < condition) {
      return `${Math.floor(time)} ${unit}s ago`;
    }
    return "";
  };

  let minute: number = (current.getTime() - createdDate.getTime()) / 1000 / 60;
  let unit = subCalc(minute, 60, "minute");
  if (unit) return unit;

  let hour = minute / 60;
  unit = subCalc(hour, 24, "hour");
  if (unit) return unit;

  let day = hour / 24;
  unit = subCalc(day, 31, "day");
  if (unit) return unit;

  let month = day / 31;
  unit = subCalc(month, 12, "month");
  if (unit) return unit;

  let year = month / 12;
  unit = subCalc(year, 100, "year");
  if (unit) return unit;
}
