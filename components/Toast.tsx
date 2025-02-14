"use client";
import { PiSunFill } from "react-icons/pi";

import { atmaSans } from "@/fonts";

export default function Toast() {
  return (
    <div className="px-2 py-2 bg-yellow-400 text-white flex justify-between rounded self-center">
      <div className="flex items-center">
        <PiSunFill className="mr-2" width={12} height={12} />
        <p className={atmaSans.className}>You cannot select a future date.</p>
      </div>
    </div>
  );
}
