"use client";
import { useState } from "react";

import { days, gradients, months } from "@/utils";
import MoodModal from "@/components/MoodModal";

type CalendarData = {
  [date: string]: number;
};

type CalendarProps = {
  data: CalendarData;
  onSetMood?: (
    date: string,
    mood: string,
    symptoms: string[],
    notes: string,
  ) => void;
};

export default function Calendar({ data = {}, onSetMood }: CalendarProps) {
  const now = new Date();
  const currentMonth = now.getMonth();
  const [selectedMonth, setSelectedMonth] = useState(
    Object.keys(months)[currentMonth],
  );
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState(now.getFullYear());
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setSelectedMonth(Object.keys(months)[0]);
      setSelectedYear(selectedYear + 1);
    } else {
      setSelectedMonth(Object.keys(months)[currentMonth + 1]);
    }
  };

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setSelectedMonth(Object.keys(months)[11]);
      setSelectedYear(selectedYear - 1);
    } else {
      setSelectedMonth(Object.keys(months)[currentMonth - 1]);
    }
  };

  const handleOnClick = (dayIndex: number) => {
    const formattedDate = `${selectedYear}-01-${dayIndex.toString().padStart(2, "0")}`;
    setSelectedDate(formattedDate);
    setIsModalOpen(true);
  };

  const monthNow = new Date(
    selectedYear,
    Object.keys(months).indexOf(selectedMonth),
    1,
  );
  const firstDayOfMonth: number = monthNow.getDay();
  const totalDaysInMonth = new Date(
    selectedYear,
    Object.keys(selectedMonth).indexOf(selectedMonth) + 1,
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
              let dateKey = `${selectedYear}-01-${dayIndex.toString().padStart(2, "0")}`;
              const intensity = data[dateKey] ?? 0;
              let color =
                gradients.yellow[
                  Math.min(intensity, gradients.yellow.length - 1)
                ];

              if (!dayDisplay) {
                return <div key={j} className="bg-white" />;
              }

              return (
                <div
                  key={j}
                  style={{ background: color }}
                  className={
                    "text-xs sm:text-sm border border-solid p-2 flex items-center gap-2 justify-between rounded-lg " +
                    (isToday ? "ring-2 ring-yellow-500" : "")
                  }
                  onClick={() => handleOnClick(dayIndex)}
                >
                  {dayIndex}
                </div>
              );
            })}
          </div>
        );
      })}
      {isModalOpen && selectedDate && (
        <MoodModal
          date={selectedDate}
          onCloseAction={() => setIsModalOpen(false)}
          onSetMood={onSetMood}
        />
      )}
    </div>
  );
}
