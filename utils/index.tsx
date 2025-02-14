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
