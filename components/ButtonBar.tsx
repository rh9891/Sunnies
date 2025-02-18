"use client";
import Link from "next/link";

import { useAuth } from "@/context/AuthContext";
import Button from "@/components/Button";
import Loading from "@/components/Loading";

export default function ButtonBar() {
  const { currentUser, loading } = useAuth();

  if (currentUser && !loading) {
    return (
      <div className="flex justify-center max-w-[600px] mx-auto w-full">
        <Link href={"/dashboard"}>
          <Button variant="dark" text="Continue Your Journey" />
        </Link>
      </div>
    );
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="grid grid-cols-2 gap-4 w-fit mx-auto">
      <Link href={"/signup"}>
        <Button variant="light" text="Sign Up" />
      </Link>
      <Link href={"/login"}>
        <Button variant="dark" text="Log In" />
      </Link>
    </div>
  );
}
