export type Mood = {
  label: string;
  icon: string;
  value: string;
};

export type Symptom = {
  label: string;
  icon: string;
  value: string;
};

export type Statuses = {
  date: { label: string; value: string };
  streak: { label: string; value: string };
  commonMood: { label: string; value: string };
};

export type UserData = {
  [date: string]: {
    mood: string;
    symptoms: string[];
  };
};

export type Position = {
  x: number;
  y: number;
};
