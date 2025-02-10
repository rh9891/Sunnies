"use client";
import { ReactNode, useState } from "react";

import { atmaSans, nunitoSans } from "@/fonts";
import Button from "@/components/Button";
import { useAuth } from "@/context/AuthContext";

type LoginProps = {
  children?: ReactNode;
  className?: string;
};

export default function Login({ className }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [authenticating, setAuthenticating] = useState(false);

  const { signup, login } = useAuth();

  const handleSubmit = async () => {
    if (!email || !password || password.length < 6) {
      return;
    }
    setAuthenticating(true);
    try {
      if (isRegistering) {
        await signup(email, password);
      } else {
        await login(email, password);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    } finally {
      setAuthenticating(false);
    }
  };

  return (
    <div
      className={
        "flex flex-col flex-1 justify-center items-center gap-4 " + className
      }
    >
      <h3 className={"text-4xl sm:text-5xl md:text-6xl " + atmaSans.className}>
        {isRegistering ? "Start Your Journey" : "Log In to Your Account"}
      </h3>
      <p className={nunitoSans.className}>
        You&#39;re one step away from a brighter life.
      </p>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full max-w-[400px] mx-auto px-3 duration-200 hover:border-yellow-500 focus:border-yellow-500 py-2 sm:py-3 border border-solid border-yellow-400 rounded-full outline-none"
        placeholder="Email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full max-w-[400px] mx-auto px-3 duration-200 hover:border-yellow-500 focus:border-yellow-500 py-2 sm:py-3 border border-solid border-yellow-400 rounded-full outline-none"
        placeholder="Password"
        type="password"
      />
      <div className="max-w-[400px] w-full mx-auto flex flex-col gap-4">
        <Button
          text={authenticating ? "Submitting..." : "Submit"}
          variant="light"
          full
          onClick={handleSubmit}
        />
        <p className={nunitoSans.className + " text-center"}>
          {isRegistering
            ? "Already have an account? "
            : "Don\'t have an account? "}
          <button
            onClick={() => setIsRegistering(!isRegistering)}
            className="text-gradient"
          >
            {isRegistering ? "Log In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
}
