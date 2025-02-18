"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { atmaSans, nunitoSans } from "@/fonts";
import { useAuth } from "@/context/AuthContext";
import Button from "@/components/Button";
import Loading from "@/components/Loading";

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authenticating, setAuthenticating] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const { signup, currentUser, loading } = useAuth();

  if (currentUser && !loading && !authenticating) {
    return (
      <div className="flex flex-col flex-1 justify-center items-center gap-4">
        <h3
          className={"text-4xl sm:text-5xl md:text-6xl " + atmaSans.className}
        >
          Continue Your Journey
        </h3>
        <p className={nunitoSans.className}>
          You&#39;re one step away from a brighter life.
        </p>
        <div className="flex justify-center max-w-[400px] w-full">
          <Link href={"/dashboard"}>
            <Button text="Go to Dashboard" variant="dark" />
          </Link>
        </div>
      </div>
    );
  }

  if (loading || authenticating) {
    return <Loading />;
  }

  const handleSignup = async () => {
    if (!email || !password || password.length < 6) {
      setErrorMessage("Password must be at least 6 characters.");
      return;
    }
    setAuthenticating(true);
    setErrorMessage("");
    try {
      await signup(email, password);
      router.push("/dashboard");
    } catch (error: unknown) {
      console.error("Error signing up:", error);

      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
      setAuthenticating(false);
    }
  };

  return (
    <div className="flex flex-col flex-1 justify-center items-center gap-4">
      <h3 className={"text-4xl sm:text-5xl md:text-6xl " + atmaSans.className}>
        Start Your Journey
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
          onClick={handleSignup}
        />
        <p className={nunitoSans.className + " text-center"}>
          Already have an account?&nbsp;
          <button
            onClick={() => router.push("/login")}
            className="text-gradient"
          >
            Log In
          </button>
        </p>
      </div>
      {errorMessage && (
        <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm w-full max-w-[400px] text-center">
          {errorMessage}
        </div>
      )}
    </div>
  );
}
