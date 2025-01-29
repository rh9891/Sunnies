const months = {
  January: "Jan",
  February: "Feb",
  March: "Mar",
  April: "Apr",
  May: "May",
  June: "Jun",
  July: "Jul",
  August: "Aug",
  September: "Sep",
  October: "Oct",
  November: "Nov",
  December: "Dec",
};
const now = new Date();
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

type CalendarProps = {
  demo: boolean;
};

export default function Calendar({ demo }: CalendarProps) {
  const year = 2025;
  const month = "January";
  const monthNow = new Date(year, Object.keys(months).indexOf(month), 1);
  const firstDayOfMonth: number = monthNow.getDay();
  const totalDaysInMonth = new Date(
    year,
    Object.keys(month).indexOf(month) + 1,
    0,
  ).getDate();

  const daysToDisplay = firstDayOfMonth + totalDaysInMonth;
  const numberOfRows =
    Math.floor(daysToDisplay / 7) + (daysToDisplay % 7 ? 1 : 0);

  return (
    <div className="flex flex-col overflow-hidden gap-1">
      {[...Array(numberOfRows).keys()].map((row, i) => {
        return (
          <div key={i} className="grid grid-cols-7 gap-1">
            {days.map((day, j) => {
              let dayIndex = i * 7 + j - (firstDayOfMonth - 1);
              let dayDisplay =
                dayIndex > totalDaysInMonth
                  ? false
                  : !(row === 0 && j < firstDayOfMonth);
              let isToday = dayIndex === now.getDate();
              let color;

              if (!dayDisplay) {
                return <div key={j} className="bg-white" />;
              }
              return (
                <div
                  key={j}
                  style={{ background: color }}
                  className={
                    "text-xs sm:text-sm border border-solid p-2 flex items-center gap-2 justify-between rounded-lg " +
                    (isToday ? "bg-yellow-400" : "bg-yellow-300") +
                    (color === "white" ? " text-yellow-400" : " text-white")
                  }
                >
                  {dayIndex}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
