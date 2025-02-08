"use client";
import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

import { moods, symptoms } from "@/helpers";
import { atmaSans, nunitoSans } from "@/fonts";

type MoodModalProps = {
  date: string;
  onCloseAction: () => void;
  onSetMood?: (
    date: string,
    mood: string,
    symptoms: string[],
    notes: string,
  ) => void;
};

export default function MoodModal({
  date,
  onCloseAction,
  onSetMood,
}: MoodModalProps) {
  const [open, setOpen] = useState(true);
  const [step, setStep] = useState(1);
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  const formattedDate = new Date(date + "T00:00:00").toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );

  const handleMoodClick = (mood: string) => {
    setSelectedMood(mood);
  };

  const handleSymptomToggle = (symptom: string) => {
    setSelectedSymptoms((prevSymptoms) =>
      prevSymptoms.includes(symptom)
        ? prevSymptoms.filter((s) => s !== symptom)
        : [...prevSymptoms, symptom],
    );
  };

  const handleSave = () => {
    if (onSetMood && selectedMood) {
      onSetMood(date, selectedMood, selectedSymptoms, notes);
    }
    onCloseAction();
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
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
            <div className="bg-white p-6 rounded-lg">
              <h2
                className={
                  "text-xl font-medium text-right mb-4 " + nunitoSans.className
                }
              >
                {formattedDate}
              </h2>
              {step === 1 && (
                <div>
                  <h5
                    className={
                      "text-3xl sm:text-4xl md:text-5xl text-center mb-4 " +
                      atmaSans.className
                    }
                  >
                    How do you
                    <span className={"text-gradient " + atmaSans.className}>
                      {" "}
                      feel{" "}
                    </span>
                    today?
                  </h5>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                    {Object.values(moods).map((mood, i) => (
                      <button
                        key={i}
                        onClick={() => handleMoodClick(mood.value)}
                        className={`flex flex-col gap-2 items-center justify-center p-4 rounded-2xl border-2 font-medium border-black text-black hover:bg-yellow-400 ${
                          selectedMood === mood.value ? "bg-yellow-400" : ""
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
                </div>
              )}
              {step === 2 && (
                <div>
                  <h5
                    className={
                      "text-3xl sm:text-4xl md:text-5xl text-center mb-4 " +
                      atmaSans.className
                    }
                  >
                    Are you experiencing any
                    <span className={"text-gradient " + atmaSans.className}>
                      {" "}
                      symptoms
                    </span>
                    ?
                  </h5>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                    {Object.values(symptoms).map((symptom, i) => (
                      <button
                        key={i}
                        onClick={() => handleSymptomToggle(symptom.value)}
                        className={`flex flex-col gap-2 items-center justify-center p-4 rounded-2xl border-2 font-medium border-black text-black hover:bg-yellow-400 ${
                          selectedSymptoms.includes(symptom.value)
                            ? "bg-yellow-400"
                            : ""
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
                </div>
              )}
              {step === 3 && (
                <div>
                  <h5
                    className={
                      "text-3xl sm:text-4xl md:text-5xl text-center mb-4 " +
                      atmaSans.className
                    }
                  >
                    Is there anything else on your
                    <span className={"text-gradient " + atmaSans.className}>
                      {" "}
                      mind
                    </span>
                    ?
                  </h5>
                  <textarea
                    className="w-full p-2 border rounded-lg mt-2"
                    placeholder="Feel free to share anything else that’s on your mind..."
                    rows={8}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>
              )}
            </div>
            <div className="bg-gray-50 px-4 py-3 flex justify-between sm:px-6">
              <button
                className="px-4 py-2 bg-gray-200 rounded-lg"
                onClick={onCloseAction}
              >
                Cancel
              </button>
              <div className="flex gap-4">
                {step > 1 && (
                  <button
                    className="px-4 py-2 bg-gray-200 rounded-lg"
                    onClick={() => setStep(step - 1)}
                  >
                    Back
                  </button>
                )}
                {step < 3 ? (
                  <button
                    className={
                      "px-4 py-2 bg-yellow-400 rounded-lg cursor-pointer " +
                      nunitoSans.className
                    }
                    onClick={() => setStep(step + 1)}
                    disabled={step === 1 && !selectedMood}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    className={
                      "px-4 py-2 bg-yellow-400 rounded-lg cursor-pointer " +
                      nunitoSans.className
                    }
                    onClick={handleSave}
                  >
                    Save
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
