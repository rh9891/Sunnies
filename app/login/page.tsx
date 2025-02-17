"use client";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import { atmaSans, nunitoSans } from "@/fonts";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authenticating, setAuthenticating] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const { login } = useAuth();

  const handleLogin = async () => {
    setAuthenticating(true);
    setErrorMessage("");
    try {
      await login(email, password);
      router.push("/dashboard");
    } catch (error: unknown) {
      console.error("Error logging in:", error);

      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    } finally {
      setAuthenticating(false);
    }
  };

  return (
    <div className="flex flex-col flex-1 justify-center items-center gap-4">
      <h3 className={"text-4xl sm:text-5xl md:text-6xl " + atmaSans.className}>
        Log In to Your Account
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
          onClick={handleLogin}
        />
        <p className={nunitoSans.className + " text-center"}>
          Don&#39;t have an account?&nbsp;
          <button
            onClick={() => router.push("/signup")}
            className="text-gradient"
          >
            Sign Up
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
