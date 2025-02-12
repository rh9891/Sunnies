"use client";
import styled from "styled-components";

import { Position } from "@/types";

const Wrapper = styled.div<{ position: Position }>`
  top: ${({ position }) => position.y};
  left: ${({ position }) => position.x};
`;

type TooltipProps = {
  message: string | null;
  position: {
    x: number;
    y: number;
  };
};

export default function Tooltip({ message, position }: TooltipProps) {
  return (
    <Wrapper
      className="absolute bg-yellow-400 text-white text-sm px-3 py-2 rounded shadow-lg transition-opacity duration-300"
      position={position}
    >
      {message}
    </Wrapper>
  );
}
