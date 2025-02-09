import type { Metadata } from "next";

import Main from "@/components/Main";
import Dashboard from "@/components/Dashboard";

export const metadata: Metadata = {
  title: "Sunnies | Dashboard",
};

export default function DashboardPage() {
  return (
    <Main>
      <Dashboard />
    </Main>
  );
}
