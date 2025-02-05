import Link from "next/link";

import { atmaSans } from "@/fonts";
import Button from "@/components/Button";

export default function Hero() {
  return (
    <div className="py-4 sm:py-10 flex flex-col gap-8 sm:gap-10">
      <h1
        className={
          "text-5xl sm:text-text-6xl md:text-7xl text-center " +
          atmaSans.className
        }
      >
        Reflect, grow, and embrace{" "}
        <span className="text-gradient">brighter</span> days with{" "}
        <span className="text-gradient">Sunnies</span>.
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-center w-full mx-auto max-w-[600px]">
        Track your journey, share insights, and
        <span className="font-semibold"> stay positive every day</span>.
      </p>
      <div className="grid grid-cols-2 gap-4 w-fit mx-auto">
        <Link href={"/dashboard"}>
          <Button variant="light" text="Sign Up" />
        </Link>
        <Link href={"/dashboard"}>
          <Button variant="dark" text="Log In" />
        </Link>
      </div>
    </div>
  );
}
