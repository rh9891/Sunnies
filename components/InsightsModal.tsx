"use client";
import { useEffect, useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { Bar, Pie } from "react-chartjs-2";

import { atmaSans } from "@/fonts";
import { UserData } from "@/types";
import { getColorForMood } from "@/utils";
import { useAuth } from "@/context/AuthContext";
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";

type InsightsModalProps = {
  onCloseAction: () => void;
};

export default function InsightsModal({ onCloseAction }: InsightsModalProps) {
  const [open, setOpen] = useState(true);
  const [step, setStep] = useState(1);
  const [data, setData] = useState<UserData>({});
  const { currentUser } = useAuth();

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

  const getMoodFrequency = (data: UserData) => {
    const moodCounts: Record<string, number> = {};

    Object.values(data).forEach((entry) => {
      if (!moodCounts[entry.mood]) {
        moodCounts[entry.mood] = 0;
      }
      moodCounts[entry.mood] += 1;
    });

    return {
      labels: Object.keys(moodCounts),
      datasets: [
        {
          label: "Frequency",
          data: Object.values(moodCounts),
          backgroundColor: [
            "#FF6384",
            "#F66D44",
            "#FEAE65",
            "#FEE12B",
            "#E6F69D",
            "#AADEA7",
            "#64C2A6",
            "#2D87BB",
            "#66D3FA",
            "#AC64AD",
          ],
        },
      ],
    };
  };

  const getSymptomFrequency = (data: UserData) => {
    const symptomCounts: Record<string, number> = {};

    Object.values(data).forEach((entry) => {
      entry.symptoms.forEach((symptom) => {
        if (!symptomCounts[symptom]) {
          symptomCounts[symptom] = 0;
        }
        symptomCounts[symptom] += 1;
      });
    });

    return {
      labels: Object.keys(symptomCounts).map((symptom) =>
        symptom.length > 10 ? symptom.substring(0, 10) : symptom,
      ),
      datasets: [
        {
          label: "Frequency",
          data: Object.values(symptomCounts),
          backgroundColor: "#FEAE65",
          borderColor: "#FEE12B",
          borderWidth: 1,
        },
      ],
    };
  };

  const getMoodSymptomCorrelation = (data: UserData) => {
    const moodSymptomCounts: Record<string, Record<string, number>> = {};

    Object.values(data).forEach((entry) => {
      if (!moodSymptomCounts[entry.mood]) {
        moodSymptomCounts[entry.mood] = {};
      }

      entry.symptoms.forEach((symptom) => {
        if (!moodSymptomCounts[entry.mood][symptom]) {
          moodSymptomCounts[entry.mood][symptom] = 0;
        }
        moodSymptomCounts[entry.mood][symptom] += 1;
      });
    });

    const moods = Object.keys(moodSymptomCounts);
    const symptoms = Array.from(
      new Set(Object.values(moodSymptomCounts).flatMap((s) => Object.keys(s))),
    );

    return {
      labels: symptoms.map((symptom) =>
        symptom.length > 10 ? symptom.substring(0, 10) : symptom,
      ),
      datasets: moods.map((mood) => ({
        label: mood,
        data: symptoms.map((symptom) => moodSymptomCounts[mood][symptom] || 0),
        backgroundColor: getColorForMood(mood),
        stack: "moodSymptoms",
      })),
    };
  };

  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false);
        onCloseAction();
      }}
      className="relative z-10"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-3xl data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <h2
              className={
                "text-xl font-medium text-start mb-4 bg-yellow-400 p-4 " +
                atmaSans.className
              }
            >
              {step === 1
                ? "Mood Patterns Over Time"
                : step === 2
                  ? "Most Common Symptoms Logged"
                  : "Mood and Symptom Correlation"}
            </h2>
            <div className={"bg-white p-6 rounded-lg " + atmaSans.className}>
              {step === 1 && <Pie data={getMoodFrequency(data)} />}
              {step === 2 && (
                <Bar
                  data={getSymptomFrequency(data)}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    scales: {
                      x: {
                        title: {
                          display: false,
                          text: "Symptoms",
                        },
                        ticks: {
                          autoSkip: false,
                          maxRotation: 90,
                          minRotation: 90,
                        },
                      },
                      y: {
                        title: {
                          display: true,
                          text: "Occurrences",
                        },
                        beginAtZero: true,
                      },
                    },
                  }}
                />
              )}
              {step === 3 && (
                <Bar
                  data={getMoodSymptomCorrelation(data)}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: "top",
                      },
                    },
                    scales: {
                      x: {
                        title: {
                          display: false,
                          text: "Symptoms",
                        },
                        stacked: true,
                        ticks: {
                          autoSkip: false,
                          maxRotation: 90,
                          minRotation: 90,
                        },
                      },
                      y: {
                        title: {
                          display: true,
                          text: "Occurrences",
                        },
                        stacked: true,
                        beginAtZero: true,
                      },
                    },
                  }}
                />
              )}
            </div>
            <div className="bg-gray-50 px-4 py-3 flex justify-between sm:px-6">
              <button
                className={
                  "px-4 py-2 bg-gray-200 rounded-lg " + atmaSans.className
                }
                onClick={onCloseAction}
              >
                Cancel
              </button>
              <div className="flex gap-4">
                {step > 1 && (
                  <button
                    className={
                      "px-4 py-2 bg-gray-200 rounded-lg " + atmaSans.className
                    }
                    onClick={() => setStep(step - 1)}
                  >
                    Back
                  </button>
                )}
                {step < 3 ? (
                  <button
                    className={
                      "px-4 py-2 bg-yellow-400 rounded-lg cursor-pointer " +
                      atmaSans.className
                    }
                    onClick={() => setStep(step + 1)}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    className={
                      "px-4 py-2 bg-yellow-400 rounded-lg cursor-pointer " +
                      atmaSans.className
                    }
                    onClick={() => onCloseAction()}
                  >
                    Close
                  </button>
                )}
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
