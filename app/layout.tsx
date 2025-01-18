import {ReactNode} from "react";
import type { Metadata } from "next";
import {Barriecito, Geist, Geist_Mono} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const barriecito = Barriecito({
    variable: "--font-barriecito-sans",
    subsets: ["latin"], weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    const header = (<header className='p-4 sm:p-8 flex items-center justify-between gap-4'><h1 className={'text-base sm:text-lg ' + barriecito.className}>Sunnies</h1></header>)
    const footer = (<footer>Footer</footer>)

  return (
    <html lang="en">
      <body
        className={'w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col ' + `${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      {header}
        {children}
      {footer}
      </body>
    </html>
  );
}
