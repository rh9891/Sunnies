import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  Tooltip,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
);

export const gradients = {
  yellow: [
    "#FFFFB7",
    "#FFF192",
    "#FFEA61",
    "#FFE136",
    "#FFDD3C",
    "#FFDB01",
    "#FFD400",
    "#FFD900",
    "#FFC212",
  ],
};

export const months = {
  January: "Jan",
  February: "Feb",
  March: "Mar",
  April: "Apr",
  May: "May",
  June: "Jun",
  July: "Jul",
  August: "Aug",
  September: "Sep",
  October: "Oct",
  November: "Nov",
  December: "Dec",
} as const;

export type Months = keyof typeof months;

export const now = new Date();
export const currentMonth = now.getMonth();

export const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const getColorForMood = (mood: string) => {
  const moodColors: Record<string, string> = {
    Angry: "#FF6384",
    Calm: "#F66D44",
    Excited: "#FEAE65",
    Happy: "#FEE12B",
    Grateful: "#E6F69D",
    Motivated: "#AADEA7",
    Neutral: "#64C2A6",
    Overwhelmed: "#2D87BB",
    Sad: "#66D3FA",
    Scared: "#AC64AD",
  };
  return moodColors[mood] || "#C9CBCE";
};
