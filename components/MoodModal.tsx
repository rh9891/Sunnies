"use client";
import { useState } from "react";
import { moods, symptoms } from "@/helpers";

type MoodModalProps = {
  date: string;
  onClose: () => void;
  onSetMood?: (date: string, mood: string, symptoms: string[]) => void;
};

export default function MoodModal({
  date,
  onClose,
  onSetMood,
}: MoodModalProps) {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

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

  const handleSubmit = () => {
    if (onSetMood && selectedMood) {
      onSetMood(date, selectedMood, selectedSymptoms);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-[90%] max-w-md">
        <h2 className="text-xl font-bold text-center mb-4">Log for {date}</h2>

        <h3 className="text-lg font-medium">How do you feel today?</h3>
        <div className="grid grid-cols-3 gap-2 my-2">
          {Object.values(moods).map((mood, i) => (
            <button
              key={i}
              className={`p-2 border rounded-lg ${selectedMood === mood.value ? "bg-yellow-400" : "bg-gray-100"}`}
              onClick={() => handleMoodClick(mood.value)}
            >
              {mood.label}
            </button>
          ))}
        </div>

        <h3 className="text-lg font-medium mt-4">Any symptoms?</h3>
        <div className="grid grid-cols-3 gap-2 my-2">
          {Object.values(symptoms).map((symptom, i) => (
            <button
              key={i}
              className={`p-2 border rounded-lg ${selectedSymptoms.includes(symptom.value) ? "bg-yellow-400" : "bg-gray-100"}`}
              onClick={() => handleSymptomToggle(symptom.value)}
            >
              {symptom.label}
            </button>
          ))}
        </div>

        <div className="flex justify-between mt-4">
          <button
            className="px-4 py-2 bg-gray-200 rounded-lg"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-yellow-400 rounded-lg"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
