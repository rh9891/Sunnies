"use client";
import Link from "next/link";
import Image from "next/image";

import { atmaSans } from "@/fonts";
import ViewInsights from "@/components/ViewInsights";
import Logout from "../Logout";
import * as Styled from "./Styles";

export default function Header() {
  return (
    <Styled.Header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/Sunnies.png" alt="Sunnies Logo" height={36} width={36} />
        <h1
          className={
            "text-base sm:text-lg md:text-2xl text-gradient " +
            atmaSans.className
          }
        >
          Sunnies
        </h1>
      </Link>
      <div className="flex gap-4">
        <ViewInsights />
        <Logout />
      </div>
    </Styled.Header>
  );
}
