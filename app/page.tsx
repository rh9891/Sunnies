"use client";
import dynamic from "next/dynamic";

import Main from "@/components/Main";

const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });

export default function Home() {
  return (
    <Main>
      <Hero />
    </Main>
  );
}
