import { Props_TimeAgo } from "types";

function TimeDiff(time: string):string {
  const today = new Date();
  const dayAgo = new Date(time);
  const dayDiff = today.getTime() - dayAgo.getTime();
  const SEC = 1000;
  const MIN = SEC * 60;
  const HOUR = MIN * 60;
  const DAY = HOUR * 24;
  const MONTH = DAY * 30;
  const YEAR = MONTH * 12;

  const remainingSec = Math.floor(dayDiff / SEC);
  const remainingMin = Math.floor(dayDiff / MIN);
  const remainingHour = Math.floor(dayDiff / HOUR);
  const remainingDay = Math.floor(dayDiff / DAY);
  const remainingMonth = Math.floor(dayDiff / MONTH);
  const remainingYear = Math.floor(dayDiff / YEAR);

  if (dayDiff < MIN) {
    return `${Math.floor(remainingSec)}sec${dayDiff < SEC * 2 ? "" : "s"} Ago`;
  }
  if (dayDiff < HOUR) {
    return `${Math.floor(remainingMin)}min${dayDiff < MIN * 2 ? "" : "s"} Ago`;
  }
  if (dayDiff < DAY) {
    return `${Math.floor(remainingHour)}hour${dayDiff < HOUR * 2 ? "" : "s"} Ago`;
  }
  if (dayDiff < MONTH) {
    return `${Math.floor(remainingDay)}day${dayDiff < DAY * 2 ? "" : "s"} Ago`;
  }
  if (dayDiff < YEAR) {
    return `${Math.floor(remainingMonth)}month${dayDiff < MONTH * 2 ? "" : "s"} Ago`;
  }
  return `${Math.floor(remainingYear)}year${dayDiff < YEAR * 2 ? "" : "s"} Ago`;
}

const TimeAgo: React.FC<Props_TimeAgo> = ({ time }) => {
  return <div className="timeDiff">{TimeDiff(time)}</div>;
}

export default TimeAgo;
