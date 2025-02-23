"use client";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { currentMonth, days, gradients, months, Months, now } from "@/utils";
import { CalendarData } from "@/types";
import { atmaSans } from "@/fonts";
import MoodModal from "@/components/MoodModal";
import ConfirmationModal from "@/components/ConfirmationModal";
import Toast from "@/components/Toast";
import * as Styled from "./Styles";

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
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [isToastOpen, setIsToastOpen] = useState(false);

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

    const selectedDate = new Date(selectedYear, monthIndex - 1, dayIndex);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate > today) {
      setIsToastOpen(true);
      setTimeout(() => setIsToastOpen(false), 3000);
      return;
    }

    if (selectedDate < today) {
      setSelectedDate(formattedDate);
      setIsConfirmationModalOpen(true);
      return;
    }

    setSelectedDate(formattedDate);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleCloseConfirmation = () => {
    setIsConfirmationModalOpen(false);
  };

  const handleConfirmation = () => {
    setIsConfirmationModalOpen(false);
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
    <>
      {isToastOpen && <Toast />}
      <Styled.CalendarWrapper>
        <Styled.CalendarContainer>
          <Styled.Header>
            <Styled.Button onClick={handlePreviousMonth}>
              <FiChevronLeft color="#334155" size={24} />
            </Styled.Button>
            <Styled.MonthText
              className={atmaSans.className}
            >{`${months[selectedMonth]} ${selectedYear}`}</Styled.MonthText>
            <Styled.Button onClick={handleNextMonth}>
              <FiChevronRight color="#334155" size={24} />
            </Styled.Button>
          </Styled.Header>
          <Styled.Weekdays className={atmaSans.className}>
            {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
              <div key={`${day}-${i}`} className="flex justify-center">
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
                    atmaSans.className
                  }
                >
                  {days.map((day, j) => {
                    const dayIndex = i * 7 + j - firstDayOfMonth + 1;
                    const dayDisplay =
                      dayIndex > totalDaysInMonth
                        ? false
                        : !(row === 0 && j < firstDayOfMonth);
                    const todayDate = new Date();
                    const todayFormatted = `${todayDate.getFullYear()}-${(
                      todayDate.getMonth() + 1
                    )
                      .toString()
                      .padStart(
                        2,
                        "0",
                      )}-${todayDate.getDate().toString().padStart(2, "0")}`;

                    const dateKey = `${selectedYear}-${(
                      Object.keys(months).indexOf(selectedMonth) + 1
                    )
                      .toString()
                      .padStart(
                        2,
                        "0",
                      )}-${dayIndex.toString().padStart(2, "0")}`;
                    const isToday = dateKey === todayFormatted;
                    const intensity =
                      (data?.[dateKey]?.mood ? 1 : 0) +
                      (data?.[dateKey]?.symptoms?.length || 0) +
                      (data?.[dateKey]?.notes ? 1 : 0);
                    const color =
                      intensity > 0
                        ? gradients.yellow[
                            Math.min(intensity, gradients.yellow.length - 1)
                          ]
                        : "#ffffff";

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
              existingData={data[selectedDate]}
              onCloseAction={handleClose}
              onSetMood={onSetMood}
            />
          )}
          {isConfirmationModalOpen && selectedDate && (
            <ConfirmationModal
              onCloseAction={handleCloseConfirmation}
              onConfirmAction={handleConfirmation}
            />
          )}
        </Styled.CalendarContainer>
      </Styled.CalendarWrapper>
    </>
  );
}
