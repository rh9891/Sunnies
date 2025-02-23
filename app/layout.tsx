import { ReactNode } from "react";
import type { Metadata } from "next";
import Head from "next/head";

import { nunitoSans } from "@/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sunnies",
  description:
    "Sunnies is a hopeful symptom and mood tracker app designed to brighten your days. Track your moods, share insights with your care team, and stay positive with Sunnies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <Head>
          <title>Sunnies | Reflect, grow, and embrace brighter days</title>
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link
            rel="icon"
            href="/icon?<generated>"
            type="image/<generated>"
            sizes="<generated>"
          />
          <link
            rel="apple-touch-icon"
            href="/apple-icon?<generated>"
            type="image/<generated>"
            sizes="<generated>"
          />
        </Head>
        <body
          className={
            "w-full mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-700 " +
            `${nunitoSans.variable} ${nunitoSans.variable} antialiasing`
          }
        >
          <Header />
          {children}
          <Footer />
        </body>
      </AuthProvider>
    </html>
  );
}
