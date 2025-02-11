"use client";
import Link from "next/link";
import Image from "next/image";

import Sunnies from "../../public/sunnies.png";
import { atmaSans } from "@/fonts";
import * as Styled from "./Styles";

export default function Header() {
  return (
    <Styled.Header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <Link href="/" className="flex items-start gap-2">
        <Image src={Sunnies} alt="Sunnies Logo" height={36} width={36} />
        <h1
          className={
            "text-base sm:text-lg md:text-2xl text-gradient " +
            atmaSans.className
          }
        >
          Sunnies
        </h1>
      </Link>
    </Styled.Header>
  );
}
