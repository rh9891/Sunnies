export const gradients = {
  yellow: [
    "#FFFFB7",
    "#FFF192",
    "#FFEA61",
    "#FFDD3C",
    "#FFDB01",
    "#FFD400",
    "#FFC212",
    "#FEA923",
    "#FE9033",
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
