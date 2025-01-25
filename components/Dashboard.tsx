import { ReactNode } from "react";

import { atmaSans, nunitoSans } from "@/fonts";
// import AbdominalPain from 'Symptoms/AbdominalPain.png';
// import Anxiety from 'Symptoms/Anxiety.png';
// import ChestPain from 'Symptoms/ChestPain.png';
// import Chills from 'Symptoms/Chills.png';
// import Confusion from 'Symptoms/Confusion.png';
// import Cough from 'Symptoms/Cough.png';
// import Depression from 'Symptoms/Depression.png';
// import Diarrhea from 'Symptoms/Diarrhea.png';
// import Dizziness from 'Symptoms/Dizziness.png';
// import Fatigue from 'Symptoms/Fatigue.png';
// import Fever from 'Symptoms/Fever.png';
// import Headache from 'Symptoms/Headache.png';
// import LossOfAppetite from 'Symptoms/LossOfAppetite.png';
// import MuscleAches from 'Symptoms/MuscleAches.png';
// import Nausea from 'Symptoms/Nausea.png';
// import Pain from 'Symptoms/Pain.png';
// import PoorSleep from "Symptoms/PoorSleep.png";
// import Rash from 'Symptoms/Rash.png';
// import ShortnessOfBreath from 'Symptoms/ShortnessOfBreath.png';
// import SoreThroat from 'Symptoms/SoreThroat.png';
// import Sweating from 'Symptoms/Sweating.png';

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
    <div className="flex flex-col flex-1 gap-4 sm:gap-8 md:gap-12">
      <div className="grid grid-cols-1 sm:grid-cols-3 bg-yellow-50 text-yellow-400 rounded-lg">
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
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4"></div>
    </div>
  );
}
