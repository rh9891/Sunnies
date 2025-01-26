import { Mood, Symptom } from "@/types";

export const symptoms: Record<string, Symptom> = {
  "Abdominal Pain": {
    label: "Abdominal Pain",
    icon: "AbdominalPain",
    value: "abdominalPain_01",
  },
  Anxiety: { label: "Anxiety", icon: "Anxiety", value: "anxiety_02" },
  "Chest Pain": {
    label: "Chest Pain",
    icon: "ChestPain",
    value: "chestPain_03",
  },
  Chills: { label: "Chills", icon: "Chills", value: "chills_04" },
  Confusion: { label: "Confusion", icon: "Confusion", value: "confusion_05" },
  Cough: { label: "Cough", icon: "Cough", value: "cough_06" },
  Depression: {
    label: "Depression",
    icon: "Depression",
    value: "depression_07",
  },
  Diarrhea: { label: "Diarrhea", icon: "Diarrhea", value: "diarrhea_08" },
  Dizziness: { label: "Dizziness", icon: "Dizziness", value: "dizziness_09" },
  Fatigue: { label: "Fatigue", icon: "Fatigue", value: "fatigue_10" },
  Fever: { label: "Fever", icon: "Fever", value: "fever_11" },
  Headache: { label: "Headache", icon: "Headache", value: "headache_12" },
  "Loss of Appetite": {
    label: "Loss of Appetite",
    icon: "LossOfAppetite",
    value: "lossOfAppetite_13",
  },
  "Muscle Aches": {
    label: "Muscle Aches",
    icon: "MuscleAches",
    value: "muscleAches_14",
  },
  Nausea: { label: "Nausea", icon: "Nausea", value: "nausea_15" },
  Pain: { label: "Pain", icon: "Pain", value: "pain_16" },
  PoorSleep: { label: "Poor Sleep", icon: "PoorSleep", value: "poorSleep_17" },
  "Shortness of Breath": {
    label: "Shortness of Breath",
    icon: "ShortnessOfBreath",
    value: "shortnessOfBreath_18",
  },
  "Sore Throat": {
    label: "Sore Throat",
    icon: "SoreThroat",
    value: "soreThroat_19",
  },
  Sweating: { label: "Sweating", icon: "Sweating", value: "sweating_20" },
};

export const moods: Record<string, Mood> = {
  Angry: { label: "Angry", icon: "Angry", value: "angry_01" },
  Calm: { label: "Calm", icon: "Calm", value: "calm_02" },
  Excited: { label: "Excited", icon: "Excited", value: "excited_03" },
  Happy: { label: "Happy", icon: "Happy", value: "happy_04" },
  Grateful: { label: "Grateful", icon: "Grateful", value: "grateful_05" },
  Motivated: { label: "Motivated", icon: "Motivated", value: "motivated_06" },
  Neutral: { label: "Neutral", icon: "Neutral", value: "neutral_07" },
  Overwhelmed: {
    label: "Overwhelmed",
    icon: "Overwhelmed",
    value: "overwhelmed_08",
  },
  Sad: { label: "Sad", icon: "Sad", value: "sad_09" },
  Scared: { label: "Scared", icon: "Scared", value: "scared_10" },
};
