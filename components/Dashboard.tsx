import { ReactNode } from "react";

import { atmaSans, nunitoSans } from "@/fonts";
import { symptoms } from "@/helpers";

type DashboardProps = {
  className?: string;
  children?: ReactNode;
};

type Statuses = {
  numberOfDays: { label: string; value: number };
  timeRemaining: { label: string; value: string };
  date: { label: string; value: string };
};

export default function Dashboard({ children, className }: DashboardProps) {
  const statuses: Statuses = {
    numberOfDays: { label: "Number of Days", value: 14 },
    timeRemaining: { label: "Time Remaining", value: "13:14:26" },
    date: { label: "Date", value: new Date().toDateString() },
  };

  return (
    <div className="flex flex-col flex-1 gap-8 sm:gap-10 md:gap-16">
      <div className="grid grid-cols-3 bg-yellow-50 text-yellow-400 rounded-lg">
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
              <p className={"text-base sm:text-lg " + nunitoSans.className}>
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
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {Object.values(symptoms).map((symptom, i) => (
          <button
            key={i}
            className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200"
          >
            <img
              src={`Symptoms/${symptom.icon}.png`}
              alt={symptom.label}
              className="w-16 h-16 object-cover mb-2"
            />
            <p className={"text-center " + nunitoSans.className}>
              {symptom.label}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
