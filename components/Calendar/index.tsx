"use client";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { currentMonth, days, gradients, months, Months, now } from "@/utils";
import { nunitoSans } from "@/fonts";
import MoodModal from "@/components/MoodModal";
import * as Styled from "./Styles";

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
  const [selectedMonth, setSelectedMonth] = useState<Months>(
    Object.keys(months)[currentMonth] as Months,
  );
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState(now.getFullYear());
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNextMonth = () => {
    const monthIndex = Object.keys(months).indexOf(selectedMonth);
    if (monthIndex === 11) {
      setSelectedMonth(Object.keys(months)[0] as Months);
      setSelectedYear((prev) => prev + 1);
    } else {
      setSelectedMonth(Object.keys(months)[monthIndex + 1] as Months);
    }
  };

  const handlePreviousMonth = () => {
    const monthIndex = Object.keys(months).indexOf(selectedMonth);
    if (monthIndex === 0) {
      setSelectedMonth(Object.keys(months)[11] as Months);
      setSelectedYear((prev) => prev - 1);
    } else {
      setSelectedMonth(Object.keys(months)[monthIndex - 1] as Months);
    }
  };

  const handleOnClick = (dayIndex: number) => {
    const monthIndex = Object.keys(months).indexOf(selectedMonth) + 1;
    const formattedDate = `${selectedYear}-${monthIndex.toString().padStart(2, "0")}-${dayIndex.toString().padStart(2, "0")}`;
    setSelectedDate(formattedDate);
    setIsModalOpen(true);
  };

  const firstDayOfMonth =
    (new Date(
      selectedYear,
      Object.keys(months).indexOf(selectedMonth),
      1,
    ).getDay() +
      6) %
    7;
  const totalDaysInMonth = new Date(
    selectedYear,
    Object.keys(months).indexOf(selectedMonth) + 1,
    0,
  ).getDate();

  const daysToDisplay = firstDayOfMonth + totalDaysInMonth;
  const numberOfRows =
    Math.floor(daysToDisplay / 7) + (daysToDisplay % 7 ? 1 : 0);

  return (
    <Styled.CalendarWrapper>
      <Styled.CalendarContainer>
        <Styled.Header>
          <Styled.Button onClick={handlePreviousMonth}>
            <FiChevronLeft size={24} />
          </Styled.Button>
          <Styled.MonthText
            className={nunitoSans.className}
          >{`${months[selectedMonth]} ${selectedYear}`}</Styled.MonthText>
          <Styled.Button onClick={handleNextMonth}>
            <FiChevronRight size={24} />
          </Styled.Button>
        </Styled.Header>

        <Styled.Weekdays className={nunitoSans.className}>
          {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
            <div key={`${day}-${i}`} className={`flex justify-center`}>
              {day}
            </div>
          ))}
        </Styled.Weekdays>

        <Styled.DayGrid>
          {[...Array(numberOfRows).keys()].map((row, i) => {
            return (
              <div
                key={i}
                className={
                  "grid grid-cols-7 gap-2 justify-items-center " +
                  nunitoSans.className
                }
              >
                {days.map((day, j) => {
                  let dayIndex = i * 7 + j - firstDayOfMonth + 1;
                  let dayDisplay =
                    dayIndex > totalDaysInMonth
                      ? false
                      : !(row === 0 && j < firstDayOfMonth);
                  let isToday = dayIndex === now.getDate();
                  let dateKey = `${selectedYear}-${(
                    Object.keys(months).indexOf(selectedMonth) + 1
                  )
                    .toString()
                    .padStart(2, "0")}-${dayIndex.toString().padStart(2, "0")}`;
                  const intensity = data[dateKey] ?? 0;
                  let color =
                    gradients.yellow[
                      Math.min(intensity, gradients.yellow.length - 1)
                    ];

                  if (!dayDisplay) {
                    return <div key={j} className="bg-white" />;
                  }

                  return (
                    <Styled.Day
                      key={j}
                      $bgColor={color}
                      $isToday={isToday}
                      onClick={() => handleOnClick(dayIndex)}
                    >
                      {dayIndex}
                    </Styled.Day>
                  );
                })}
              </div>
            );
          })}
        </Styled.DayGrid>

        {isModalOpen && selectedDate && (
          <MoodModal
            date={selectedDate}
            onCloseAction={() => setIsModalOpen(false)}
            onSetMood={onSetMood}
          />
        )}
      </Styled.CalendarContainer>
    </Styled.CalendarWrapper>
  );
}
