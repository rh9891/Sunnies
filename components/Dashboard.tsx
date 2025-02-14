"use client";
import { useEffect, useState } from "react";
import { db } from "@/firebase";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";

import { Statuses, UserData } from "@/types";
import { useAuth } from "@/context/AuthContext";
import { atmaSans } from "@/fonts";
import Calendar from "@/components/Calendar/index";
import Loading from "@/components/Loading";
import Login from "@/components/Login";

export default function Dashboard() {
  const [data, setData] = useState<UserData>({});
  const { currentUser, loading } = useAuth();

  const calculateStreak = (dates: string[]): number => {
    if (!dates.length) return 0;

    const sortedDates = dates.sort(
      (a, b) => new Date(b).getTime() - new Date(a).getTime(),
    );
    let streak = 1;
    let prevDate = new Date(sortedDates[0]);

    for (let i = 1; i < sortedDates.length; i++) {
      const currentDate = new Date(sortedDates[i]);
      const diff =
        (prevDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24);
      if (diff === 1) {
        streak++;
      } else {
        break;
      }
      prevDate = currentDate;
    }

    return streak;
  };

  const getMostCommonMood = (data: UserData) => {
    const moodCounts: Record<string, number> = {};

    Object.values(data).forEach(({ mood }) => {
      moodCounts[mood] = (moodCounts[mood] || 0) + 1;
    });

    const maxCount = Math.max(...Object.values(moodCounts), 0);
    const mostCommonMoods = Object.keys(moodCounts).filter(
      (mood) => moodCounts[mood] === maxCount,
    );

    return mostCommonMoods.length > 1 ? "N/A" : mostCommonMoods[0] || "N/A";
  };

  const statuses = {
    date: { label: "Today's Date", value: new Date().toDateString() },
    streak: {
      label: "Current Streak",
      value: calculateStreak(Object.keys(data)) + " days",
    },
    commonMood: { label: "Most Common Mood", value: getMostCommonMood(data) },
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
          entries[doc.id] = doc.data() as {
            mood: string;
            symptoms: string[];
            notes: string;
          };
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
    <div className="flex justify-center flex-col flex-1 gap-8 sm:gap-10 md:gap-16">
      <div className="flex flex-wrap justify-center gap-4">
        {Object.keys(statuses).map((status) => {
          const statusKey = status as keyof Statuses;

          return (
            <div
              key={statusKey}
              className="relative flex flex-col justify-between bg-white shadow-sm border border-black rounded-lg w-full sm:w-64 min-h-[120px] p-4"
            >
              <h5
                className={
                  "mb-2 text-slate-800 text-xl font-bold " + atmaSans.className
                }
              >
                {statuses[statusKey].label}
              </h5>
              <p
                className={
                  "text-yellow-400 text-2xl sm:text-3xl font-bold " +
                  atmaSans.className
                }
              >
                {statuses[statusKey].value}
              </p>
            </div>
          );
        })}
      </div>
      <Calendar data={calendarData} onSetMood={handleSetMood} />
    </div>
  );
}
