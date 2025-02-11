import styled, { keyframes } from "styled-components";
import Image from "next/image";

import Sun from "../public/Sun.svg";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const Loader = styled(Image)`
  animation: ${rotate} 8s infinite linear;
  transform-origin: 50% 50%;
  width: 100px;
  height: 100px;
`;

export default function Loading() {
  return (
    <div className="flex flex-col flex-1 justify-center items-center">
      <Loader src={Sun} alt="Sun" width={100} height={100} />
    </div>
  );
}
