"use client";
import { useEffect, useState } from "react";

import Calendar from "@/components/Calendar";
import { useAuth } from "@/context/AuthContext";

type Statuses = {
  numberOfDays: { label: string; value: number };
  timeRemaining: { label: string; value: string };
  date: { label: string; value: string };
};

type UserData = {
  [date: string]: {
    mood: string;
    symptoms: string[];
  };
};

export default function Dashboard() {
  const [data, setData] = useState<UserData>({});

  const { currentUser, userDataObject } = useAuth();

  const statuses: Statuses = {
    numberOfDays: { label: "Number of Days", value: 14 },
    timeRemaining: { label: "Time Remaining", value: "13:14:26" },
    date: { label: "Date", value: new Date().toDateString() },
  };

  const handleSetMood = (
    date: string,
    mood: string,
    symptoms: string[],
    notes: string,
  ) => {
    setData((prevData) => ({
      ...prevData,
      [date]: { mood, symptoms, notes },
    }));

    // TODO: Save data to Firebase
  };

  useEffect(() => {
    if (!currentUser || !userDataObject) {
      return;
    }
    setData(userDataObject);
  }, [currentUser, userDataObject]);

  const calendarData = Object.keys(data).reduce(
    (acc, date) => {
      acc[date] = data[date].symptoms.length;
      return acc;
    },
    {} as { [date: string]: number },
  );

  return (
    <div className="flex flex-col flex-1 gap-8 sm:gap-10 md:gap-16">
      <Calendar data={calendarData} onSetMood={handleSetMood} />
    </div>
  );
}
