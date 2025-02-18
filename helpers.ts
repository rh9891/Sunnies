import { Mood, Symptom } from "@/types";

export const symptoms: Record<string, Symptom> = {
  "Abdominal Pain": {
    label: "Abdominal Pain",
    icon: "AbdominalPain",
    value: "Abdominal Pain",
  },
  Anxiety: { label: "Anxiety", icon: "Anxiety", value: "Anxiety" },
  "Chest Pain": {
    label: "Chest Pain",
    icon: "ChestPain",
    value: "Chest Pain",
  },
  Chills: { label: "Chills", icon: "Chills", value: "Chills" },
  Confusion: { label: "Confusion", icon: "Confusion", value: "Confusion" },
  Cough: { label: "Cough", icon: "Cough", value: "Cough" },
  Depression: {
    label: "Depression",
    icon: "Depression",
    value: "Depression",
  },
  Diarrhea: { label: "Diarrhea", icon: "Diarrhea", value: "Diarrhea" },
  Dizziness: { label: "Dizziness", icon: "Dizziness", value: "Dizziness" },
  Fatigue: { label: "Fatigue", icon: "Fatigue", value: "Fatigue" },
  Fever: { label: "Fever", icon: "Fever", value: "Fever" },
  Headache: { label: "Headache", icon: "Headache", value: "Headache" },
  "Loss of Appetite": {
    label: "Loss of Appetite",
    icon: "LossOfAppetite",
    value: "Loss of Appetite",
  },
  "Muscle Aches": {
    label: "Muscle Aches",
    icon: "MuscleAches",
    value: "Muscle Aches",
  },
  Nausea: { label: "Nausea", icon: "Nausea", value: "Nausea" },
  Pain: { label: "Pain", icon: "Pain", value: "Pain" },
  PoorSleep: { label: "Poor Sleep", icon: "PoorSleep", value: "Poor Sleep" },
  "Shortness of Breath": {
    label: "Shortness of Breath",
    icon: "ShortnessOfBreath",
    value: "Shortness of Breath",
  },
  "Sore Throat": {
    label: "Sore Throat",
    icon: "SoreThroat",
    value: "Sore Throat",
  },
  Sweating: { label: "Sweating", icon: "Sweating", value: "Sweating" },
};

export const moods: Record<string, Mood> = {
  Angry: { label: "Angry", icon: "Angry", value: "Angry" },
  Calm: { label: "Calm", icon: "Calm", value: "Calm" },
  Excited: { label: "Excited", icon: "Excited", value: "Excited" },
  Happy: { label: "Happy", icon: "Happy", value: "Happy" },
  Grateful: { label: "Grateful", icon: "Grateful", value: "Grateful" },
  Motivated: { label: "Motivated", icon: "Motivated", value: "Motivated" },
  Neutral: { label: "Neutral", icon: "Neutral", value: "Neutral" },
  Overwhelmed: {
    label: "Overwhelmed",
    icon: "Overwhelmed",
    value: "Overwhelmed",
  },
  Sad: { label: "Sad", icon: "Sad", value: "Sad" },
  Scared: { label: "Scared", icon: "Scared", value: "Scared" },
};
