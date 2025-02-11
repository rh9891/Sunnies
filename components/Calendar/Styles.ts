import styled from "styled-components";

export const CalendarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;
`;

export const MonthText = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 32px;
  width: 32px;
  border: 2px solid #334155;
  cursor: pointer;
`;

export const Weekdays = styled.div`
  display: flex;
  gap: 4px;
  text-align: center;
  font-weight: 600;
  font-size: 14px;
  color: #1f2937;
  padding: 8px;
  justify-content: space-around;
`;

export const DayGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px;
`;

export const Day = styled.div<{ $isToday?: boolean; $bgColor?: string }>`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${(props) => props.$bgColor || "transparent"};
  cursor: pointer;
  transition: background-color 0.2s;

  ${(props) => props.$isToday && "border: 2px solid #ffc100;"}
  &:hover {
    background-color: #facc15;
    color: white;
  }
`;
