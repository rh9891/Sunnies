"use client";
import { useEffect, useState } from "react";

import { atmaSans, nunitoSans } from "@/fonts";
import { moods, symptoms } from "@/helpers";
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
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

  const { currentUser, userDataObject } = useAuth();

  const statuses: Statuses = {
    numberOfDays: { label: "Number of Days", value: 14 },
    timeRemaining: { label: "Time Remaining", value: "13:14:26" },
    date: { label: "Date", value: new Date().toDateString() },
  };

  const handleSetMood = () => {
    // update the current state of mood/symptoms
    // update the global state of mood/symptoms
    // update the mood/symptoms in firebase
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
      <div className="grid grid-cols-3 border-2 border-black text-black p-4 gap-4 rounded-lg">
        {Object.keys(statuses).map((status, i) => {
          const statusKey = status as keyof Statuses;

          return (
            <div key={i} className="p-4 flex flex-col gap-1 sm:gap-2">
              <p
                className={
                  "font-medium uppercase text-xs sm:text-sm " +
                  nunitoSans.className
                }
              >
                {statuses[statusKey].label}
              </p>
              <p
                className={
                  "text-base sm:text-lg truncate " + nunitoSans.className
                }
              >
                {statuses[statusKey].value}
              </p>
            </div>
          );
        })}
      </div>
      <h4
        className={
          "text-4xl sm:text-5xl md:text-6xl text-center " + atmaSans.className
        }
      >
        How do you
        <span className={"text-gradient " + atmaSans.className}> feel </span>
        today?
      </h4>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        {Object.values(moods).map((mood, i) => (
          <button
            key={i}
            onClick={() => setSelectedMood(mood.label)}
            className={`flex flex-col gap-2 items-center justify-center p-4 rounded-2xl border-2 font-medium border-black text-black hover:bg-yellow-400 ${
              selectedMood === mood.label ? "bg-yellow-400" : ""
            }`}
          >
            <img
              src={`Moods/${mood.icon}.png`}
              alt={mood.label}
              className="w-16 h-16 object-cover mb-2"
            />
            <p
              className={
                "text-center text-xs sm:text-sm md:text-base " +
                nunitoSans.className
              }
            >
              {mood.label}
            </p>
          </button>
        ))}
      </div>
      <h3
        className={
          "text-4xl sm:text-5xl md:text-6xl text-center " + atmaSans.className
        }
      >
        Anything else on your
        <span className={"text-gradient " + atmaSans.className}> mind </span>or
        <span className={"text-gradient " + atmaSans.className}> body </span>
        today?
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        {Object.values(symptoms).map((symptom, i) => (
          <button
            key={i}
            onClick={() => {
              setSelectedSymptoms(
                (prev) =>
                  prev.includes(symptom.label)
                    ? prev.filter((s) => s !== symptom.label) // Deselect if already selected
                    : [...prev, symptom.label], // Add if not selected
              );
            }}
            className={`flex flex-col gap-2 items-center justify-center p-4 rounded-2xl border-2 font-medium border-black text-black hover:bg-yellow-400 ${
              selectedSymptoms.includes(symptom.label) ? "bg-yellow-400" : ""
            }`}
          >
            <img
              src={`Symptoms/${symptom.icon}.png`}
              alt={symptom.label}
              className="w-16 h-16 object-cover mb-2"
            />
            <p
              className={
                "text-center text-xs sm:text-sm md:text-base " +
                nunitoSans.className
              }
            >
              {symptom.label}
            </p>
          </button>
        ))}
      </div>
      <Calendar data={calendarData} onSetMood={handleSetMood} />
    </div>
  );
}
