import { symptoms } from "@/helpers";
import { Symptom } from "@/types";

export const gradients = {
  yellow: [
    "#fff8db",
    "#fff0b8",
    "#ffe495",
    "#ffd97b",
    "#ffc84f",
    "#dba339",
    "#b78127",
    "#936118",
    "#7a4b10",
  ],
};

function generateSymptomData(day: number): Symptom[] {
  const symptomKeys = Object.keys(symptoms);
  const symptomCount = Math.floor(Math.random() * 4) + 1;

  const daySymptoms: Symptom[] = [];
  for (let i = 0; i < symptomCount; i++) {
    const randomIndex = Math.floor(Math.random() * symptomKeys.length);
    const symptomKey = symptomKeys[randomIndex];
    const symptom = symptoms[symptomKey];

    const severity = Math.random();
    let severityValue;
    if (severity < 0.3) {
      severityValue = `${symptom.value}`;
    } else if (severity < 0.7) {
      severityValue = `${symptom.value}`;
    } else {
      severityValue = `${symptom.value}`;
    }

    daySymptoms.push({
      ...symptom,
      value: severityValue,
    });
  }

  return daySymptoms;
}

const generate45DaysSymptoms = () => {
  const symptomsData = [];
  for (let day = 1; day <= 45; day++) {
    symptomsData.push({
      day,
      symptoms: generateSymptomData(day),
    });
  }
  return symptomsData;
};

export const symptomsFor45Days = generate45DaysSymptoms();
