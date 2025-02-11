"use client";
import { useEffect, useState } from "react";
import { db } from "@/firebase";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";

import { useAuth } from "@/context/AuthContext";
import { atmaSans } from "@/fonts";
import { now } from "@/utils";
import Calendar from "@/components/Calendar/index";
import Loading from "@/components/Loading";
import Login from "@/components/Login";

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
  const { currentUser, loading } = useAuth();

  const statuses: Statuses = {
    numberOfDays: {
      label: "Number of Days Logged",
      value: Object.keys(data).length,
    },
    timeRemaining: {
      label: "Time Remaining",
      value: `${23 - now.getHours()}H ${60 - now.getMinutes()}M`,
    },
    date: { label: "Today's Date", value: new Date().toDateString() },
  };

  const handleSetMood = async (
    date: string,
    mood: string,
    symptoms: string[],
    notes: string,
  ) => {
    if (!currentUser) {
      console.error("No authenticated user found.");
      return;
    }
    const userDocRef = doc(db, "users", currentUser.uid, "entries", date);

    try {
      await setDoc(userDocRef, { mood, symptoms, notes }, { merge: true });

      setData((prevData) => ({
        ...prevData,
        [date]: { mood, symptoms, notes },
      }));
    } catch (error) {
      console.error("Error saving mood entry:", error);
    }
  };

  useEffect(() => {
    if (!currentUser) return;

    const fetchData = async () => {
      try {
        const userEntriesRef = collection(
          db,
          "users",
          currentUser.uid,
          "entries",
        );
        const snapshot = await getDocs(userEntriesRef);
        const entries: UserData = {};

        snapshot.forEach((doc) => {
          entries[doc.id] = doc.data() as { mood: string; symptoms: string[] };
        });

        setData(entries);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [currentUser]);

  const calendarData = Object.keys(data).reduce(
    (acc, date) => {
      acc[date] = data[date].symptoms.length;
      return acc;
    },
    {} as { [date: string]: number },
  );

  if (!currentUser && !loading) {
    return <Login />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col flex-1 gap-8 sm:gap-10 md:gap-16">
      <div className="flex flex-row gap-4 items-center justify-center">
        {Object.keys(statuses).map((status) => {
          const statusKey = status as keyof Statuses;

          return (
            <div
              key={statusKey}
              className="relative flex flex-col my-6 bg-white shadow-sm border border-black rounded-lg w-64"
            >
              <div className="p-4">
                <h5
                  className={
                    "mb-2 text-slate-800 text-xl font-bold " +
                    atmaSans.className
                  }
                >
                  {statuses[statusKey].label}
                </h5>
                <p
                  className={
                    "text-yellow-400 leading-normal font-bold " +
                    atmaSans.className
                  }
                >
                  {statuses[statusKey].value}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <Calendar data={calendarData} onSetMood={handleSetMood} />
    </div>
  );
}
