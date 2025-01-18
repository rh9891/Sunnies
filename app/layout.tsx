import {ReactNode} from "react";
import type { Metadata } from "next";
import {Atma, Barriecito, Geist, Geist_Mono, Nunito_Sans, Rubik_Dirt} from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
    variable: "--font-nunito-sans",
    subsets: ["latin"], weight: "400",
});

const barriecitoSans = Rubik_Dirt({
    variable: "--font-rubik-dirt-sans",
    subsets: ["latin"], weight: "400",
});

const atmaSans = Atma({
    variable: "--font-atma-sans",
    subsets: ["latin"], weight: "400",
});

export const metadata: Metadata = {
  title: "Sunnies",
  description: "Sunnies is a hopeful symptom and mood tracker app designed to brighten your days. Track your moods, share insights with your care team, and stay positive with Sunnies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
    const header = (<header className='p-4 sm:p-8 flex items-center justify-between gap-4'><h1 className={'text-base sm:text-lg textGradient ' + atmaSans.className}>Sunnies</h1></header>)
    const footer = (<footer className='p-4 sm:p-8'>Footer</footer>)

  return (
    <html lang="en">
      <body
        className={'w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-700 ' + `${nunitoSans.variable} ${nunitoSans.variable} antialiased`}
      >
      {header}
        {children}
      {footer}
      </body>
    </html>
  );
}
