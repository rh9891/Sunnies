import { ReactNode } from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const Loader = styled.svg`
  animation: ${rotate} 8s infinite linear;
  transform-origin: 50% 50%;
  width: 100px;
  height: 100px;
`;

type LoadingProps = {
  children?: ReactNode;
  className?: string;
};

export default function Loading({ className }: LoadingProps) {
  return (
    <div className="flex flex-col flex-1 justify-center items-center">
      <Loader xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <path
          d="M50,22.37A27.63,27.63,0,1,1,22.37,50,27.66,27.66,0,0,1,50,22.37ZM16.62,50a2.29,2.29,0,0,0-2.29-2.29h-12a2.29,2.29,0,1,0,0,4.58h12A2.29,2.29,0,0,0,16.62,50ZM83.38,50a2.29,2.29,0,0,0,2.29,2.29h12a2.29,2.29,0,1,0,0-4.58h-12A2.29,2.29,0,0,0,83.38,50ZM47.67,2.29v12a2.29,2.29,0,1,0,4.58,0v-12a2.29,2.29,0,0,0-4.58,0ZM50,83.38a2.29,2.29,0,0,0-2.29,2.29v12a2.29,2.29,0,1,0,4.58,0v-12A2.29,2.29,0,0,0,50,83.38ZM27,24.8a2.28,2.28,0,0,0-.67-1.62l-8.53-8.51a2.29,2.29,0,1,0-3.23,3.24l8.52,8.51A2.29,2.29,0,0,0,27,24.8Zm46.58,52,8.53,8.51a2.29,2.29,0,0,0,3.23-3.24l-8.53-8.51a2.29,2.29,0,0,0-3.23,3.24Zm-.05-53.68a2.29,2.29,0,1,0,3.24,3.23l8.51-8.53a2.29,2.29,0,1,0-3.24-3.23ZM26.42,76.86a2.29,2.29,0,0,0-3.24-3.23l-8.51,8.53a2.29,2.29,0,0,0,3.24,3.23Z"
          transform="translate(0 0)"
          fill="#f6e05e"
        />
      </Loader>
    </div>
  );
}
